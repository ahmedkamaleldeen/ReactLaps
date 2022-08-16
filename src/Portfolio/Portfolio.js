import React from "react";
import Cards from "./Cards";
class Portfolio extends React.Component{
    constructor(){
        super();
        this.state={title:[ "WEB DESIGN","MOBILE DESIGN","LOGO DESIGN" ,"WEB APPLICATION DEVELOPMENT","MOBILE APPLICATION DEVELOPMENT","PWA DEVELOPMENT"]}
    }
    render(){
        const {title}=this.state;
        return <>
        <Cards title={title} />
        </>
    }
}
export default Portfolio;