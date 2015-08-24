define(["dojo/_base/declare",
        "alfresco/logo/Logo",
        "dojo/text!./templates/Logo.html"],
    function(declare, Logo, template) {

        return declare([Logo], {
            targetUrl: "",

            /**
             * The HTML template to use for the widget.
             * @instance
             * @type {string}
             */
            templateString: template
        });
    });