class Utils {
    SetId($element, id) {
        $element.id = id;
    }

    SetClass($element, className) {
        $element.classList.add(className);
    }

    SetText($element, text) {
        $element.textContent = text;
    }

    RemoveClass($element, className) {
        $element.classList.remove(className);
    }

    ToggleClass($element, className) {
        $element.classList.toggle(className);
    }
}

module.exports = Utils;