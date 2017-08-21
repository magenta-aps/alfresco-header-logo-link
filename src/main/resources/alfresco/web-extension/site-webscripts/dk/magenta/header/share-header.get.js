var logo = widgetUtils.findObject(model.jsonModel.widgets, "id", "HEADER_LOGO");

if (logo) {
    logo.name = "roskilde_logo/logo/Logo";

    var configElement = config.scoped["Logo"]["href"];
    if (configElement != null) {
        logo.config.targetUrl = configElement.getValue();
    } else {
        logo.config.targetUrl = url.context;
    }
}