/* eslint no-unused-vars:0 */

var d3 = require("d3");
var React = require("react");

var VictoryTree = React.createClass({
    _d3Tree: d3.layout.tree().size()
    drawLinks: function (links) {
      var linkComponents = links.map(function (link, index) {
        return (
          this.props.link(link)
        )
      })
      return (<g>
        {linkComponents}
      </g>)
    },
    drawNodes: function (nodes) {
      var nodeComponents = nodes.map(function (node, index) {
        return (
          this.props.node(node)
        )
      })
      return (<g>{nodeComponents}</g>;
    },
    render: function() {
      var d3Tree = d3.layout.tree().size(
        [
          this.props.svgHeight,
          this.props.svgWidth
        ]
      );
      var nodes = d3Tree.nodes(this.props.data);
      var links = d3Tree.links(nodes);
      return (
        <g>
          {this.drawNodes(nodes)}
          {this.drawLinks(links)}
        </g>
      )
    }
});

module.exports = VictoryTree;