const badgesSimpleCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// apspl React components
import MKBox from "components/MKBox";

// apspl React examples
import Breadcrumbs from "examples/Breadcrumbs";

function BreadcrumbsEL() {
  return (
    <MKBox component="section" bgColor="white" py={8}>
      <Container>
        <Grid container spacing={2} item xs={12} lg={10} mx="auto">
          <Grid item xs={12}>
            <Breadcrumbs
              routes={[{ label: "Home", route: "/sections/elements/breadcrumbs" }]}
            />
          </Grid>
          <Grid item xs={12}>
            <Breadcrumbs
              routes={[
                { label: "Home", route: "/sections/elements/breadcrumbs" },
                { label: "Library" },
              ]}
            />
          </Grid>
          <Grid item xs={12}>
            <Breadcrumbs
              routes={[
                { label: "Home", route: "/sections/elements/breadcrumbs" },
                { label: "Library", route: "/sections/elements/breadcrumbs" },
                { label: "Data" },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BreadcrumbsEL;`;

export default badgesSimpleCode;
