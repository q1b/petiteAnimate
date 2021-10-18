const removeOptions = ( properties ) => {
        let tempProperties = properties;
        Object.keys(properties).forEach( ( e, i )=>{ 
          if( ['duration','delay'].includes(e) ){
            delete tempProperties[e];
          }
        });
        return tempProperties;
};

const extractOptions = ( properties ) => {
        let options = {};
        Object.keys(properties).forEach( ( e, i )=>{ 
          if( ['duration','delay','fill','easing','endDelay'].includes(e) ){
            options[e] = properties[e];
          }
        })
        return options;
      };

export function Animate(props) {
    return {
      element: document.querySelector(props.element),
      direction:'forward',
      options:{
        from:extractOptions(props.from),
        to:extractOptions(props.to),
      },
      keyframes: {
        from: removeOptions(props.from),
        to: removeOptions(props.to)
      },
      play() {
        if(this.direction==="forward"){
          this.element.animate(
            this.keyframes.from,
            this.options.from
          );
          this.direction="backward"
        }else{
          this.element.animate(
            this.keyframes.to,
            this.options.to
          );
          this.direction="forward"
        }
      },
    }
  };