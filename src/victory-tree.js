/* eslint no-unused-vars:0 */

var d3 = require('d3');
var React = require('react');

var VictoryTree = React.createClass({
    diagonal: d3.svg.diagonal().projection(
      function(d) { return [d.y, d.x]; }
    ),
    drawNodes: function(nodes) {
      var nodeComponents = nodes.map((node, index) => {
        return (
          this.props.node(node, index)
        )
      })
      return (<g>{nodeComponents}</g>)
    },
    drawLinks: function(links) {
      var linkComponents = links.map((link, index) => {
        return (
          this.props.link(link, this.diagonal, index)
        )
      })
      return (<g>
        {linkComponents}
      </g>)
    },
    render: function() {
      // todo - check for changes in width height in componentWillRecieveProps
      var d3Tree = d3.layout.tree().size(
        [
          this.props.svgHeight,
          this.props.svgWidth
        ]
      );
      var nodes = d3Tree.nodes(this.props.data);
      var links = d3Tree.links(nodes);
      return (
        <g transform={this.props.transform}>
          {this.drawNodes(nodes)}
          {this.drawLinks(links)}
        </g>
      )
    }
});

module.exports = VictoryTree;
