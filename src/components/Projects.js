import { Typography, Card } from "@mui/material";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

function Projects() {
  return (
    <div>
      <Card sx={{ maxWidth: 285 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Project 1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
export default Projects;
