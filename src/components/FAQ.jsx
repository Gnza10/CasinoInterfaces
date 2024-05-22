import React, { Component } from "react";

function render(props) {
    return (
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#282828" }}>
        <div className="container-fluid">
          <div className="align-items-start">
            <div className="btn-group">
              <button
                class="btn btn-outline-warning " 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target={`#FAQdescription${props.FAQindex}`} 
                aria-expanded="false" 
                aria-controls={`FAQdescription${props.FAQindex}`}
                style={{ textAlign: "left"}}
              >
                <h4 class="text-white" style={{textAlign: "left"}}>{props.FAQname}</h4>
              </button>  
            </div>    
            <div class="collapse" id={`FAQdescription${props.FAQindex}`}>
              <div class="card card-body ">
              <div dangerouslySetInnerHTML={{ __html: props.FAQdescription }} />
              </div>
            </div> 
          </div>  
        </div>
      </nav>
    );
  }

  export default render;