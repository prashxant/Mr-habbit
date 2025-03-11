import { Button } from "@repo/ui/button";
import { Heatmap } from "@repo/ui/heatmap";

export default function Home() {
  return (
      <div>
        <Button appName="web" >
          Open alert
        </Button>

  <div style={{ display:"flex", justifyContent:"center"}}>
    <Heatmap />
  </div>


      
    </div>
  );  
}
