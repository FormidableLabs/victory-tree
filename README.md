#VictoryTree

[Victory](https://www.npmjs.com/package/victory) is a ReactJS based data visualization library.

victory-tree is a tree layout component powered by the math behind d3.layout.tree

### Example Usage

```
var Visualization = React.createClass({
  getInitalState: function () {
    return {
      height:
    }
  },
  node: function (node) {
    return (
      <VictoryGroup {...node}>
        <VictoryCircle/>
        <VictoryText/>
      </VictoryGroup>
    )
  },
  link: function (link) {
    return (
      <VictoryPath d={link.diagonal}/>
    )
  },
  render: function () {
    return (
      <svg
        style={{"border": "2px solid black", "margin": "20px"}}
        width={this.state.svgWidth}
        height={this.state.svgHeight}>
        <g transform={"translate(100,0)"}>
          <VictoryTree
            data={fooArrayOfLinksAndNodes}
            node={this.node}
            link={this.link}
          />
          </VictoryTree>
        </g>
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