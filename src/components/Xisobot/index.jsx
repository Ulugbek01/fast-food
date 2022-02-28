import React from 'react'
import Header from '../Header';
import { Container } from './style';
import {VictoryBar, VictoryChart, VictoryLine} from 'victory';

const data = [
  {quarter: 'Feb 13'},
  {quarter: 'Feb 14'},
  {quarter: 'Feb 15'},
  {quarter: 'Feb 16'},
  {quarter: 'Feb 17'},
  {quarter: 'Feb 18'},
];

const sampleData = [
  {x: 1.0, y: 2.0},
  {x: 2.0, y: 3.0},
  {x: 3.0, y: -4.0},
  {x: 4.0, y: 5.0},
  {x: 5.0, y: 6.0},
  { y: 7.0}
]

export const Xisobot = () => {
  return (
    <>
      <Header title='xisobot'/>
      <Container>
        <Container.Item>
          <Container.Item.Header>
            <div className='title'>Yopilgan zakazlar | Barcha filial</div>
            <div className='deta'>13.02.2020 - 19.02.2020</div>
          </Container.Item.Header>
          <VictoryChart>
            <VictoryBar
              data={data}
              x="quarter"
            />
          </VictoryChart>
        </Container.Item>
        <Container.Item>
        <Container.Item.Header>
          <div className='title'>Atmen zakazlar | Barcha filial</div>
          <div className='deta'>13.02.2020 - 19.02.2020</div>
        </Container.Item.Header>
        <VictoryChart>
            <VictoryLine data={sampleData} />
        </VictoryChart>
        </Container.Item>
      </Container>
    </>
  )
}

export default Xisobot;