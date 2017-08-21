define(["dojo/_base/declare",
        "alfresco/logo/Logo",
        "dojo/text!./templates/Logo.html"],
    function (declare, Logo, template) {
        return declare([Logo], {
            targetUrl: "",

            /**
             * An array of the CSS files to use with this widget.
             *
             * @instance
             * @type {object[]}
             * @default [{cssFile:"./css/Image.css"}]
             */
            cssRequirements: [{
                cssFile: "./css/Logo.css"
            }],

            /**
             * The HTML template to use for the widget. We wrap the link around the image.
             * @instance
             * @type {string}
             */
            templateString: template
        });
    }
);