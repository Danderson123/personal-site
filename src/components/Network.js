import React from 'react';
import cytoscape from 'cytoscape';
import cise from 'cytoscape-cise';

class Cyto extends React.Component{
    constructor(props){
        super(props);
        this.cytoRef = React.createRef();
        this.renderCytoscapeElement = this.renderCytoscapeElement.bind(this);
    }

    renderCytoscapeElement(){
        cytoscape.use(cise);
        this.cy = cytoscape(
        {
            container: this.cytoRef.current,

            animate: true, // Whether to show the layout as it's running
            ready: undefined, // Callback on layoutready
            boxSelectionEnabled: false,
            autounselectify: true,
            zoomingEnabled: true,
            style: cytoscape.stylesheet()
            .selector('node')
                .css({
                    'label': 'data(label)',
                    'text-opacity': 0.5,
                    'text-valign': 'center',
                    'text-halign': 'right',
                    'background-color': "#4682B4",
                    'background-image': './banner.png',
                    'border-color': "#bfbfbf",
                    'border-width': "0.6",
                    'border-style': "solid",
                    "font-size": "12px"
                })
                .selector('edge')
                .css({'width': 0.4}),
            elements: {
              nodes: [
                  { data: { id: 'cat' } },
                  { data: { id: 'bird' } },
                  { data: { id: 'ladybug' } },
                  { data: { id: 'aphid' } },
                  { data: { id: 'rose' } },
                  { data: { id: 'grasshopper' } },
                  { data: { id: 'plant' } },
                  { data: { id: 'wheat' } }
              ],
              edges: [
                  { data: { source: 'cat', target: 'bird' } },
                  { data: { source: 'bird', target: 'ladybug' } },
                  { data: { source: 'bird', target: 'grasshopper' } },
                  { data: { source: 'grasshopper', target: 'plant' } },
                  { data: { source: 'grasshopper', target: 'wheat' } },
                  { data: { source: 'ladybug', target: 'aphid' } },
                  { data: { source: 'aphid', target: 'rose' } }
              ]
          },
          layout: { name: 'cise' }
          });
    }
    componentDidMount(){
        this.renderCytoscapeElement();
        console.log(this)
    };

      componentDidUnmout(){
        this.destroy();
    };

    render() {
    return (
        <div ref={this.cytoRef} style={{height:'90%', width:'90%'}}></div>
    );
    }
}

export default Cyto;