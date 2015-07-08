var d3 = require("d3");
var react = require("React");

var vCircle = require("victory/components/victory-circle")

var victory = require("victory");
var vText = require("victory-text")


var Visualization = React.createClass({
  getInitalState: function () {
    return {
      height: 
    }
  },
  nodeTemplate: function (node) {
    return (
      <VictoryGroup {...node}>
        <VictoryCircle/>
        <VictoryText/>
      </VictoryGroup>
    )
  },
  linkTemplate: function (link) {
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
          <VictoryTree data={flare}
            fooData={}
            node={this.getNodeComponent()}
            nodeTemplate={this.nodeTemplate}
            linkTemplate={this.linkTemplate}
          />
          </VictoryTree>
        </g>
      </svg>
    );
  }
})
