import GaugeComponent from 'react-gauge-component';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ScoreGauge = ({ score, status }) => {
  const getStatusColor = () => {
    if (status === 'Safe') return "bg-green-100 text-green-700 hover:bg-green-100";
    if (status === 'Suspicious') return "bg-yellow-100 text-yellow-700 hover:bg-yellow-100";
    return "bg-red-100 text-red-700 hover:bg-red-100";
  };

  return (
    <Card className="mb-8 overflow-hidden shadow-lg border-t-4" style={{
      borderTopColor: status === 'Safe' ? '#10B981' : status === 'Suspicious' ? '#F59E0B' : '#EF4444'
    }}>
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-xl text-gray-700">Genuineness Score</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center pb-6">
        <div className="w-full max-w-100 -mb-10">
          <GaugeComponent
            type="semicircle"
            arc={{
              width: 0.2,
              padding: 0.005,
              cornerRadius: 1,
              subArcs: [
                { limit: 50, color: '#EF4444', showTick: true },
                { limit: 80, color: '#F59E0B', showTick: true },
                { limit: 100, color: '#10B981', showTick: true },
              ]
            }}
            pointer={{ type: "blob", animationDelay: 0 }}
            value={score}
          />
        </div>
        
        <div className="mt-4 text-center">
          <Badge variant="outline" className={`text-lg px-4 py-1 rounded-full border-none ${getStatusColor()}`}>
            {status.toUpperCase()}
          </Badge>
          <p className="text-sm text-muted-foreground mt-2">
            Based on multi-layer analysis
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScoreGauge;