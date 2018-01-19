(function ($) {

    let popup;

    function LaureatesList () {

        this.$el = $('[data-laureates]');

        this.config = {
            start : 0,
            count : 50
        };

        this.initTpl();

        this.listenEvents();

        this.getData();

    }

    LaureatesList.prototype = {

        initTpl : function () {

            this.addBtn = $('[data-add]');

            this.itemTpl = this.$el.find('li').get(0).outerHTML;

            this.$el.empty();

        },

        listenEvents : function () {

            this.addBtn.on('click', () => {
                popup.show({
                    firstName : '',
                    lastName : '',
                    bornCountry : ''
                }, 'create', this.addItem.bind(this));
            });

            this.$el.on('scroll', (e) => {

                let thisPos = this.$el.get(0).getBoundingClientRect();

                let lastChildPos = e.target.children && e.target.children[e.target.children.length - 1].getBoundingClientRect();

                if(lastChildPos.top - thisPos.bottom < 100){
                    this.getData()
                }

            });

            $('#sort').on('change', (e) => {

                if(e.target.value != 0){
                    this.config.start = 0;
                    this.config.query = decodeURIComponent(e.target.value);
                    this.getData();
                }
            });

        },

        getData : function () {

            let baseUrl = `/items?start=${this.config.start}&count=${this.config.count}`;

            let url = this.config.query ? `${baseUrl}&${this.config.query}` : `${baseUrl}`;

            if(this.config.start == 0){
                this.empty();
            }

            $.get(url)
                .done((response) => {

                    this.config.start += this.config.count;

                    this.buildList(response);

                })

                .fail(function (err) {
                    console.dir(err);
                });

        },

        buildList : function (laureates) {

            laureates.forEach(this.addItem.bind(this));

        },

        empty : function () {
            this.$el.empty();
        },

        addItem : function (laureate) {

            let laureateInstance = new Laureate(this.itemTpl, laureate);

            this.$el.append(laureateInstance.$el);

        }


    };

    function Laureate (tpl, model) {

        this.$el = $(tpl);

        this.model = model;

        this.initTpl();

        this.listenEvents();

        this.render();

    }

    Laureate.prototype = {

        initTpl : function () {

            this.tpl = {



            };

        },


        listenEvents : function () {

            this.$el.find('[data-edit]').on('click', () => {
                popup.show(this.model, 'edit', this.update.bind(this));
            });

            this.$el.find('[data-delete]').on('click', () => {
                this.removeItem();
            });

        },

        render : function () {

            this.$el.find('[data-fname]').text(this.model.firstName);
            this.$el.find('[data-lname]').text(this.model.lastName);
            this.$el.find('[data-born-country]').text(this.model.bornCountry);

        },

        removeItem : function () {
            $.ajax({
                type : 'delete',
                url : '/items/' + this.model.id
            })
                .done(() => {
                    this.$el.remove();
                })
                .fail((err) => {
                    console.dir(err);
                })
        },

        update : function (model) {
            this.model = model;
            this.render();
        }

    };

    function LaureatePopup(){
        this.$el = $('[data-popup]');
        this.initTpl();
        this.listenEvents();
    }

    LaureatePopup.prototype = {

        initTpl : function () {

            this.tpl = {
                fnameEl : this.$el.find('[data-fname-input]'),
                lnameEl : this.$el.find('[data-lname-input]'),
                bornCountryEl : this.$el.find('[data-born-country-input]'),
                saveBtn : this.$el.find('[data-save]'),
                closeBtn : this.$el.find('[data-close]')
            }

        },

        listenEvents : function () {
            this.tpl.saveBtn.on('click', this.save.bind(this));
            this.tpl.closeBtn.on('click', this.hide.bind(this));
        },

        save : function () {

            let data = {
                firstName : this.tpl.fnameEl.val(),
                lastName : this.tpl.lnameEl.val(),
                bornCountry : this.tpl.bornCountryEl.val()
            };

            if(this.model.id >= 0){
                data.id = this.model.id
            }

            $.ajax({
                type : this.type == 'edit' ? 'put' : 'post',
                data : data,
                url : '/items' + (this.type == 'edit' ? '/' + this.model.id : '')
            })

                .done((item) => {
                    this.successCallback(item);
                    this.hide();
                })

                .fail((error) => {
                    console.dir(error);
                });


        },

        show : function (data, type, successCallback) {
            this.model = data;
            this.type = type;
            this.successCallback = successCallback;
            this.render();
            this.$el.removeClass('hidden');

        },

        hide : function () {
            this.$el.addClass('hidden');
        },

        render : function () {

            this.tpl.fnameEl.val(this.model.firstName);
            this.tpl.lnameEl.val(this.model.lastName);
            this.tpl.bornCountryEl.val(this.model.bornCountry);

        }

    };

    popup =  new LaureatePopup();

    new LaureatesList();

})(jQuery);


