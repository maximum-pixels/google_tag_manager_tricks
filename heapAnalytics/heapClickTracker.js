document.addEventListener('mouseup', function (e) {
    //Let's not capture right-clicks.
    if (e.button !== 2) {
        var tree = [];
        var target = e.target;
        while (target.nodeName !== 'HTML') {
            var classList = target.classList;
            classList = classList.length > 0 ? '.' + classList.value.replace(/\s/g, '.') : '';
            var id = target.id == "" ? "" : "#" + target.id;
            tree.push('' + target.nodeName.toLowerCase() + id + classList);
            target = target.parentElement;
        }
        tree = tree.reverse().join('>');

        // do stuff with your click tree now, e.g.
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            event: 'heapClick',
            eventCategory: 'Heap',
            eventAction: 'Click',
            eventLabel: tree
        });
    }
});