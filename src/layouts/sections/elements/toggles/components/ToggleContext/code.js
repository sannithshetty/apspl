const toggleContextCode = `import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

// apspl React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function ToggleContext() {
  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => setChecked(!checked);

  return (
    <MKBox component="section" py={8}>
      <Container>
        <Grid container item xs={4} justifyContent="center" mx="auto">
          <MKBox display="flex" alignItems="center">
            <Switch checked={checked} onChange={toggleSwitch} />
            <MKBox ml={2} lineHeight={0.5}>
              <MKTypography display="block" variant="button" fontWeight="bold">
                Remember me
              </MKTypography>
              <MKTypography variant="caption" color="text" fontWeight="regular">
                Be sure that you will always be logged in.
              </MKTypography>
            </MKBox>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ToggleContext;`;

export default toggleContextCode;
