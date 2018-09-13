import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'


const Wrapper = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  background:rgba(192,192,192,.2);
`
const Table = styled.table`
  width:80%;
  height:80vh;
  margin-top:-50px;
`
const Ptag = styled.p`
  width:100%;
  display:flex;
  justify-content:flex-start;
  padding-top:10px;
  padding-bottom:40px;
  font-weight:bold;
`
const linkStyle = {
  textDecoration:'none', 
  color:'inherit'
}

class ColumnList extends Component {
  constructor(){
    super()
    this.state = {
      cpu:[],
      cooler:[],
      motherboard:[],
      memory:[]
    }
  }
  componentDidMount(){
    let {cpu, cooler, motherboard, memory} = this.props
    if(cpu !== ''){
      axios.post('/api/singlecpu',{cpu}).then(res=>{        
          this.setState({cpu:res.data})
        })
    }
    if(cooler !== ''){
      axios.post('/api/singlecooler', {cooler}).then(res=>{
        this.setState({cooler:res.data})
      })
    }
    if(motherboard !== ''){
      axios.post('/api/singlemotherboard', {motherboard}).then(res=>{
        this.setState({motherboard:res.data})
      })
    }
    if(memory !== ''){
      axios.post('/api/getsinglememory', {memory}).then(res=>{
        this.setState({memory:res.data})
      })
    }
    
  }
  render() {    
    return (           
      <Wrapper>
        <Table>
          <thead>
            <tr>
              <th><Ptag>Component</Ptag></th>
              <th><Ptag>Selection</Ptag></th>
              <th><Ptag>Price</Ptag></th>
              <th><Ptag>Tax</Ptag></th>              
            </tr>
          </thead>
          <tbody>
            <tr style={{backgroundColor:'rgba(192,192,192,.3)', height:'30px'}}>
              <td  style={{verticalAlign:'middle', paddingLeft:'20px'}}>CPU</td>              
                <td style={{verticalAlign:'middle'}}>                  
                  <Link style={linkStyle} to='/cpu'>
                    Choose A cpu
                  </Link>  
                </td>
                <td></td>
                <td></td>            
            </tr>
            {
              this.props.cpu !== '' ?              
            <tr style={{height:'30px'}}>
            <td></td>
            <td style={{verticalAlign:'middle'}}>
              {
                this.state.cpu.map(e=> <p>{e.model}</p>)
              }
            </td>
            <td style={{ verticalAlign:'middle'}}>
              {
                this.state.cpu.map(e=> <p>{e.price}</p>)
              }
            </td>
            </tr>
            :null
            }            
            <tr style={{backgroundColor:'rgba(192,192,192,.2)',  height:'30px'}}>
              <td  style={{verticalAlign:'middle', paddingLeft:'20px'}}>CPU Cooler</td>
                <td  style={{verticalAlign:'middle'}}>
                  <Link style={linkStyle} to='/cpucooler'>
                    Choose a Cpu Cooler
                  </Link>
                </td>
                <td></td>
                <td></td>  
            </tr>
            {
              this.props.cooler !== '' ?              
            <tr style={{height:'30px'}}>
            <td></td>
            <td style={{verticalAlign:'middle'}}>
              {
                this.state.cooler.map(e=> <p>{e.model}</p>)
              }
            </td>
            <td style={{ verticalAlign:'middle'}}>
              {
                this.state.cooler.map(e=> <p>{e.price}</p>)
              }
            </td>
            </tr>
            :null
            }            
            <tr style={{backgroundColor:'rgba(192,192,192,.3)',  height:'30px'}}>              
              <td style={{verticalAlign:'middle', paddingLeft:'20px'}}>Motherboard</td>
                <td  style={{verticalAlign:'middle'}}>
                  <Link style={linkStyle} to='/mb'>
                    Choose a MB
                  </Link>
                </td>
                <td></td>
                <td></td>
            </tr>
            {
            this.props.motherboard !== '' ?              
            <tr style={{height:'30px'}}>
            <td></td>
            <td style={{verticalAlign:'middle'}}>
              {
                this.state.motherboard.map(e=> <p>{e.model}</p>)
              }
            </td>
            <td style={{ verticalAlign:'middle'}}>
              {
                this.state.motherboard.map(e=> <p>{e.price}</p>)
              }
            </td>
            </tr>
            :null
            }
            <tr style={{backgroundColor:'rgba(192,192,192,.2)',  height:'30px'}}> 
              <td  style={{verticalAlign:'middle', paddingLeft:'20px'}}>Memory</td>
                <td  style={{verticalAlign:'middle'}}>
                  <Link style={linkStyle} to='/memory'>
                    Choose Memory
                  </Link>
                </td>
                <td></td>
                <td></td>
            </tr>
            {
            this.props.memory !== '' ?              
            <tr style={{height:'30px'}}>
            <td></td>
            <td style={{verticalAlign:'middle'}}>
              {
                this.state.memory.map(e=> <p>{e.model}</p>)
              }
            </td>
            <td style={{ verticalAlign:'middle'}}>
              {
                this.state.memory.map(e=> <p>{e.price}</p>)
              }
            </td>
            </tr>
            :null
            }
            <tr style={{backgroundColor:'rgba(192,192,192,.3)',  height:'30px'}}>              
              <td  style={{verticalAlign:'middle', paddingLeft:'20px'}}>Storage</td>
                <td  style={{verticalAlign:'middle'}}>
                  <Link style={linkStyle} to='/storage'>
                    Choose Storage
                  </Link>
                </td>
                <td></td>
                <td></td>
            </tr>
            <tr style={{backgroundColor:'rgba(192,192,192,.2)',  height:'30px'}}>              
              <td  style={{verticalAlign:'middle', paddingLeft:'20px'}}>Video Card</td>
                <td  style={{verticalAlign:'middle'}}>
                  <Link style={linkStyle} to='/video'>
                    Choose Video Card
                  </Link>
                </td>
                <td></td>
                <td></td>
            </tr>
            <tr style={{backgroundColor:'rgba(192,192,192,.3)',  height:'30px'}}>              
              <td  style={{verticalAlign:'middle', paddingLeft:'20px'}}>Case</td>
                <td  style={{verticalAlign:'middle'}}>
                  <Link style={linkStyle} to='/case'>
                    Choose A Case
                  </Link>
                </td>
                <td></td>
                <td></td>
            </tr>
            <tr style={{backgroundColor:'rgba(192,192,192,.2)',  height:'30px'}}>              
              <td  style={{verticalAlign:'middle', paddingLeft:'20px'}}>Power Supply</td>
                <td  style={{verticalAlign:'middle'}}>
                  <Link style={linkStyle} to='/psu'>
                    Choose A PSU
                  </Link>
                </td>
                <td></td>
                <td></td>
            </tr>
          </tbody>
        </Table>        
      </Wrapper>
    )
  }
}
function mapState(state){
  let {
    cpu,
    cooler,
    ccase,
    motherboard,
    memory,
    stor,
    video,
    psu
  } = state
  return {
    cpu,
    cooler,
    ccase,
    motherboard,
    memory,
    stor,
    video,
    psu
  }
}
export default withRouter(connect(mapState)(ColumnList))