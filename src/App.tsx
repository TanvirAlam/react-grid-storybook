import React from 'react';
import Box from './components/box/Box';
import Grid from './components/grid/Grid';
import GridRuler from './components/gridRuler/GridRuler';

function App() {
  return (
    <div className="App" style={{
      margin: "16px",
      position: "relative",
      height: "100vh"
    }}>
      <GridRuler spacing='sm'></GridRuler>

      <Grid container spacing="sm" justifyContent="center" alignItems="center" style={{height: "100%"}}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box -1</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box -2</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box -3</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box -4</Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
