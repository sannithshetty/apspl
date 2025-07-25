const tooltipsCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";

// apspl React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";

function Tooltips() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" spacing={1}>
            <Tooltip title="Tooltip on top" placement="top">
              <MKButton variant="gradient" color="info">
                tooltip on top
              </MKButton>
            </Tooltip>
            <Tooltip title="Tooltip on right" placement="right">
              <MKButton variant="gradient" color="info">
                tooltip on right
              </MKButton>
            </Tooltip>
            <Tooltip title="Tooltip on bottom" placement="bottom">
              <MKButton variant="gradient" color="info">
                tooltip on bottom
              </MKButton>
            </Tooltip>
            <Tooltip title="Tooltip on left" placement="left">
              <MKButton variant="gradient" color="info">
                tooltip on left
              </MKButton>
            </Tooltip>
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Tooltips;`;

export default tooltipsCode;
