import { Typography, Card } from "@mui/material";
import "../projects.css";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

function Projects() {
  return (
    <div className="cards">
      <Card sx={{ maxWidth: 285 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Connect 4
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A Modern twist on an old classic game. Connect 4 is a two player
            game where players take turns dropping chips onto the board. The
            chips fall straight down, occupying the lowest available space
            within the column. The first player to connect 4 chips of the same
            color wins!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Repo</Button>
          <Button size="small">Link</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 285 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Twitter-Clone
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Twitter-Clone is a back-end based project aimed at
            reverse-engineering the popular social media platform "Twitter" and
            some of its features. Users can create a profile, log into that
            profile and start using our platform! Users can also post tweets
            that other site-members can view and interact with.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Repo</Button>
          <Button size="small">Link</Button>
        </CardActions>
      </Card>
    </div>
  );
}
export default Projects;
