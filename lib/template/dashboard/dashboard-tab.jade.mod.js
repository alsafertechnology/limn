require.define('/node_modules/kraken/template/dashboard/dashboard-tab.jade.js.js', function(require, module, exports, __dirname, __filename, undefined){

var template = function (locals, attrs, escape, rethrow) {
var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
var buf = [];
with (locals || {}) {
var interp;
buf.push('\n<div');
buf.push(attrs({ 'id':(tab_id), 'data-subview':("GraphDisplayView"), "class": ('tab-pane') + ' ' + (tab_cls) }));
buf.push('>\n</div>');
}
return buf.join("");
};
if (typeof module != 'undefined') {
    module.exports = exports = template;
}

});