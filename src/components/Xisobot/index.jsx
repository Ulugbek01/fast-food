import React from 'react'
import Header from '../Header';
import { Container, PaymentWrapper } from './style';
import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack} from 'victory';

const data2012 = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000},
  {quarter: 5, earnings: 19500}
];

const data2013 = [
  {quarter: 1, earnings: 15000},
  {quarter: 2, earnings: 12500},
  {quarter: 3, earnings: 19500},
  {quarter: 4, earnings: 13000},
  {quarter: 5, earnings: 13400},
];

const data2014 = [
  {quarter: 1, earnings: 11500},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 20000},
  {quarter: 4, earnings: 15500},
  {quarter: 5, earnings: 16000},
];

const data2015 = [
  {quarter: 1, earnings: 18000},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 15000},
  {quarter: 4, earnings: 12000},
  {quarter: 5, earnings: 14900},
];

export const Xisobot = () => {
  return (
    <>
      <Header title='xisobot'/>
      <Container>
        <div className='items-container'>
        <Container.Item>
          <Container.Item.Header>
            <div className='title'>Yopilgan zakazlar | Barcha filial</div>
            <div className='deta'>13.02.2022 - 17.02.2022</div>
          </Container.Item.Header>
          <VictoryChart
        domainPadding={2}
        theme={VictoryTheme.material}
        >
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={["Feb 13", "Feb 14", "Feb 15", "Feb 16", "Feb 17"]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`$${x / 2000}k`)}
        />
        <VictoryStack>
          <VictoryBar
            data={data2012}
            x="quarter"
            y="earnings"
          />
          <VictoryBar
            data={data2013}
            x="quarter"
            y="earnings"
          />
          <VictoryBar
            data={data2014}
            x="quarter"
            y="earnings"
          />
          <VictoryBar
            data={data2015}
            x="quarter"
            y="earnings"
          />
        </VictoryStack>
        </VictoryChart>
        </Container.Item>
        <Container.Item>
        <Container.Item.Header>
          <div className='title'>Atmen zakazlar | Barcha filial</div>
          <div className='deta'>13.02.2022 - 17.02.2022</div>
        </Container.Item.Header>
        <VictoryChart
        domainPadding={6}
        theme={VictoryTheme.material}
        >
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={["Feb 13", "Feb 14", "Feb 15", "Feb 16", "Feb 17"]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`$${x / 4000}k`)}
        />
        <VictoryStack colorScale={'warm'}>
          <VictoryBar
            data={data2012}
            x="quarter"
            y="earnings"
          />
          <VictoryBar
            data={data2013}
            x="quarter"
            y="earnings"
          />
          <VictoryBar
            data={data2014}
            x="quarter"
            y="earnings"
          />
          <VictoryBar
            data={data2015}
            x="quarter"
            y="earnings"
          />
        </VictoryStack>
        </VictoryChart>
        </Container.Item>
      </div>
        <PaymentWrapper>
          <Container.Item.Header>
            <div className='title'>To'lov turlari | Xadra</div>
            <div className='deta'>13.02.2022 - 17.02.2022</div>
          </Container.Item.Header>
        </PaymentWrapper>
      </Container>
    </>
  )
}

export default Xisobot;