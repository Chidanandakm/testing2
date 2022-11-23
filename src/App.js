import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      fourth change
      {data?.total_rise_prop?.filter(i => i.prop_value?.includes('LOW'))?.map((item) => (
                <div style={{ minWidth: '300px' }}>
                  <Card title={capitalize(item.prop_value)} sectioned>
                    <DisplayText size='large' >{item.total}</DisplayText>
                    <TextStyle>{(item.alteration_ratio * 100).toFixed(2)}%</TextStyle>
                  </Card>
                </div>
              ))}
              <div style={{ minWidth: '300px' }}>
                <Card title={'Mid'} sectioned>
                  <DisplayText size='large' s>{data?.total_rise_prop?.filter(i => i.prop_value?.includes('MID'))?.map(i => i.total)?.reduce((pr, cu) => pr + cu, 0)}</DisplayText>
                  <TextStyle>{data?.total_rise_prop?.filter(i => i.prop_value?.includes('MID'))?.map(i => i.alteration_ratio)?.reduce((pr, cu) => pr + cu, 0).toFixed(2)}%</TextStyle>
                </Card>
              </div>
              <div style={{ minWidth: '300px' }}>
                <Card title={'High'} sectioned>
                  <DisplayText size='large' s>{data?.total_rise_prop?.filter(i => i.prop_value?.includes('HIGH'))?.map(i => i.total)?.reduce((pr, cu) => pr + cu, 0)}</DisplayText>
                  <TextStyle>{data?.total_rise_prop?.filter(i => i.prop_value?.includes('HIGH'))?.map(i => i.alteration_ratio)?.reduce((pr, cu) => pr + cu, 0).toFixed(2)}%</TextStyle>
                </Card>
              </div>
    </div>
  );
}

export default App;
