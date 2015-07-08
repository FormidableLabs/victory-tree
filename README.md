#Tree

[Victory](https://www.npmjs.com/package/victory) is a ReactJS based data visualization library.

victory-tree is a tree layout component powered by the math behind d3.layout.tree

### Example Usage

```
var React = require("react");

var Group = require("victory-group");
var Circle = require("victory-circle");
var Text = require("victory-text");
var Tree = require("victory-tree");

var Visualization = React.createClass({
  getInitalState: function () {
    return {
      height: "2000px",
      width: "3000px"
    }
  },
  node: function (node) {
    return (
      <Group {...node}>
        <Circle r={node.foo} />
        <Text content={node.bar} />
      </Group>
    )
  },
  link: function (link) {
    return (
      <Path d={link.diagonal}/>
    )
  },
  render: function () {
    return (
      <svg
        style={{"border": "2px solid black", "margin": "20px"}}
        width={this.state.svgWidth}
        height={this.state.svgHeight}>
          <Tree
            data={fooArrayOfLinksAndNodes}
            node={this.node}
            link={this.link}
            transform={"translate(100,0)"}
          />
      </svg>
    );
  }
})
```

where fooArrayOfLinksAndNodes follows the [d3 hierarchy format](https://github.com/mbostock/d3/wiki/Tree-Layout#nodes):


```
{
 "name": "flare",
 "children": [
  {
   "name": "analytics",
   "children": [
    {
     "name": "cluster",
     "children": [
      {"name": "AgglomerativeCluster", "size": 3938},
      {"name": "CommunityStructure", "size": 3812},
      {"name": "MergeEdge", "size": 743}
     ]
    },
    {
     "name": "graph",
     "children": [
      {"name": "BetweennessCentrality", "size": 3534},
      {"name": "LinkDistance", "size": 5731}
     ]
    }
   ]
  }
 ]
}
```