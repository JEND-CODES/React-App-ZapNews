import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import logo2 from '../../Logo-ZapNews.png';

import styled from 'styled-components';


// Customization de la démo du Menu Hamburger React sur Codepen : https://codepen.io/naturalclar/pen/zEwvbg

class Hamburger extends React.Component {
    constructor(props){
      super(props);
      this.state={
        menuOpen:false,
      }
    }
    
    handleMenuClick() {
      this.setState({menuOpen:!this.state.menuOpen});
    }
    
    handleLinkClick() {
      this.setState({menuOpen: false});
    }
    
    render(){
      const styles= 
        {
          container:{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: '99',
            opacity: 0.9,
            display:'flex',
            alignItems:'center',
            background: '#1D233D',
            width: '100%',
            color: 'white',
            fontFamily:'Quicksand',
            
          }
          
         
        }
      const menu = ['']
      const menuItems = menu.map((val,index)=>{
        return (
          <MenuItem 
            key={index} 
            delay={`${index * 0.1}s`}
            onClick={()=>{this.handleLinkClick();}}>

                <br />
                <br />
                <br />

                <p>Bienvenue !</p>

                <p>ZAPNEWS est une application React qui permet de consulter en temps réel les dernières actualités du web, classées par thèmes et en provenance d'une centaine de sources référencées</p>

                <p>Réalisation à partir des données fournies par Newsapi.org par Jean-Eudes Nouaille-Degorce</p>
                
                <p>Développeur Full Stack 

                &nbsp;&nbsp;&nbsp;

                <a href="https://www.linkedin.com/in/jean-eudes-nouaille-degorce/" target="_blank" style={{ color:'white'}}>

                  <i className="fab fa-linkedin fa-2x" style={{ fontSize:'28px'}}></i>

                </a>

                &nbsp;&nbsp;&nbsp;

                <a href="https://github.com/JEND-CODES" target="_blank" style={{ color:'white'}}>
                
                  <i className="fab fa-github fa-2x" style={{ fontSize:'28px'}}></i>

                </a>

                </p>

               

                
                
                {val}
            
            </MenuItem>)
      });
      
      return(
        <div>
          <div style={styles.container}>
            <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white'/>

            <div style={styles.logo}>

            <MainLogo>  
              <Link className="custom-logo" to="/" style={ { fontFamily: 'Bangers, cursive', fontSize: '40px' } }>ZAPNEWS
                  
                  <img src={logo2} className="img-logo" alt="logo" style={{ width:'50px' }}/>

              </Link>
            </MainLogo>

            </div>

          </div>
          <Menu open={this.state.menuOpen}>
            {menuItems}
          </Menu>
          
        </div>
      )
    }
  }

  class MenuItem extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        hover:false,
      }
    }
    
    handleHover(){
      this.setState({hover:!this.state.hover});
    }
    
    render(){
      const styles={
        container: {
          opacity: 0,
          animation: '1s appear forwards',
          animationDelay:this.props.delay,
        },
        menuItem:{
          fontFamily:`'Quicksand', sans-serif`,
          fontSize: '1.2rem',
          padding: '1rem 0',
          margin: '0 5%',
          cursor: 'pointer',
          color: this.state.hover? 'white':'#fafafa',
          transition: 'color 0.2s ease-in-out',
          animation: '0.5s slideIn forwards',
          animationDelay:this.props.delay,
  
        },
        line: {
          width: '90%',
          height: '1px',
          background: 'gray',
          margin: '0 auto',
          animation: '0.5s shrink forwards',
          animationDelay:this.props.delay,
          
        }
      }
      return(
        <div style={styles.container}>
          <div 
            style={styles.menuItem} 
            onMouseEnter={()=>{this.handleHover();}} 
            onMouseLeave={()=>{this.handleHover();}}
            onClick={this.props.onClick}
          >
            {this.props.children}  
          </div>
        <div style={styles.line}/>
      </div>  
      )
    }
  }
  
  /* Menu.jsx */
  class Menu extends React.Component {
    constructor(props){
      super(props);
      this.state={
        open: this.props.open? this.props.open:false,
      }
    }
      
    componentWillReceiveProps(nextProps){
      if(nextProps.open !== this.state.open){
        this.setState({open:nextProps.open});
      }
    }
    
    render(){
      const styles={
        container: {
          position: 'fixed',
          top: 0,
          left: 0,
          height: this.state.open? '100%': 0,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#1D233D',
          opacity: 0.95,
          color: '#fafafa',
          transition: 'height 0.3s ease',
          zIndex: 2,
        },
        menuList: {
          paddingTop: '3rem',
        }
      }
      return(
        <div style={styles.container}>
          {
            this.state.open?
              <div style={styles.menuList}>
                {this.props.children}
              </div>:null
          }
        </div>
      )
    }
  }
  
  /* MenuButton.jsx */
  class MenuButton extends React.Component {
    constructor(props){
      super(props);
      this.state={
        open: this.props.open? this.props.open:false,
        color: this.props.color? this.props.color:'black',
      }
    }
  
    componentWillReceiveProps(nextProps){
      if(nextProps.open !== this.state.open){
        this.setState({open:nextProps.open});
      }
    }
    
    handleClick(){
    this.setState({open:!this.state.open});
    }
    
    render(){
      const styles = {
        container: {
          height: '62px',
          width: '62px',
          display:'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          padding: '4px',
          zIndex:'10000',
        },
        line: {
          height: '3px',
          width: '22.5px',
          background: this.state.color,
          transition: 'all 0.2s ease',
          borderRadius :'20%',
          
        },
        lineTop: {
          transform: this.state.open ? 'rotate(45deg)':'none',
          transformOrigin: 'top left',
          marginBottom: '5px',
          
        },
        lineMiddle: {
          opacity: this.state.open ? 0: 1,
          transform: this.state.open ? 'translateX(-16px)':'none',
          
        },
        lineBottom: {
          transform: this.state.open ? 'translateX(-1px) rotate(-45deg)':'none',
          transformOrigin: 'top left',
          marginTop: '5px',
          
        },       
      }
      return(
        <div style={styles.container} 
          onClick={this.props.onClick ? this.props.onClick: 
            ()=> {this.handleClick();}}>
          <div style={{...styles.line,...styles.lineTop}}/>
          <div style={{...styles.line,...styles.lineMiddle}}/>
          <div style={{...styles.line,...styles.lineBottom}}/>
        </div>
      )
    }
  }

  

export default Hamburger;

const MainLogo = styled.section `

position:fixed;
text-align:center;
width:100%;
top:0;
left:0;
border:0px solid red;

.custom-logo {
  color:white;
  text-decoration:none;
  transition: 0.5s;
}

.custom-logo:hover {
  opacity:0.85;
  transition: 0.5s;
}

.img-logo {
  margin-left:2px !important;
}

`;
