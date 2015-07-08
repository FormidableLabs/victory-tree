/* eslint no-unused-vars:0 */

var d3 = require("d3");
var React = require("react");

var Tree = React.createClass({
    getInitialState: function () {
      var d3Tree = d3.layout.tree().size(
        [
          this.props.svgHeight,
          this.props.svgWidth
        ]
      );
      var nodes = d3Tree.nodes(this.props.data);
      var links = d3Tree.links(nodes);

      return {
        nodes: nodes,
        links: links
      }
    },
    drawLinks: function () {
      var links = this.state.links.map(function (link, index) {
        console.log(link)
        return (
          this.props.linkTemplate(link)
        )
      })
      return (<g>
        {links}
      </g>)
    },
    drawNodes: function () {
      var nodes = this.state.nodes.map(function (node, index) {
        return (
          this.props.nodeTemplate(node)
        )
      })
      return (<g>{nodes}</g>;
    },
    render: function() {
      return (
        <g>
          {this.drawNodes()}
          {this.drawLinks()}
        </g>
      )
    }
});

module.exports = Tree;