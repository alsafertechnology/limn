var op, BaseView, Graph, GraphList, root, DEBOUNCE_RENDER, GraphListView, _ref, _;
_ref = require('../util'), _ = _ref._, op = _ref.op;
BaseView = require('../base').BaseView;
_ref = require('./graph-model'), Graph = _ref.Graph, GraphList = _ref.GraphList;
root = function(){
  return this;
}();
DEBOUNCE_RENDER = 100;
/**
 * @class View for a showing a list of all saved graphs
 */
GraphListView = exports.GraphListView = BaseView.extend({
  __bind__: ['render'],
  __debounce__: ['render'],
  tagName: 'section',
  className: 'graph-list-view',
  template: require('../template/graph/graph-list'),
  data: {},
  ready: false,
  initialize: function(){
    this.model = this.collection || (this.collection = new GraphList);
    BaseView.prototype.initialize.apply(this, arguments);
    return this.collection.once('load-success', this.onLoad, this).load();
  },
  onLoad: function(){
    console.log(this + ".onLoad!");
    this.triggerReady();
    this.isBuilt = false;
    return this.render();
  },
  toTemplateLocals: function(){
    var locals;
    locals = BaseView.prototype.toTemplateLocals.apply(this, arguments);
    locals.collection = this.collection;
    return locals;
  }
});