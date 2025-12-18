import { Link2, AlertTriangle, Fingerprint } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const URLStructure = ({ structure }) => {
  const getRiskBadge = (risk) => {
    if (risk === "High") return <Badge variant="destructive" className="animate-pulse">High Risk</Badge>;
    return <Badge variant="outline" className="text-green-600 border-green-200">Low Risk</Badge>;
  };

  return (
    <Card className="shadow-lg border-t-4 border-t-orange-500 animate-in zoom-in duration-700">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Link2 className="w-5 h-5 text-orange-500" /> Link Architecture
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-2">
        <div className="flex justify-between items-center text-sm border-b pb-2">
          <span className="text-slate-500 flex items-center gap-2"><Fingerprint size={14}/> Length Check</span>
          {getRiskBadge(structure?.lengthRisk)}
        </div>
        <div className="flex justify-between items-center text-sm border-b pb-2">
          <span className="text-slate-500 flex items-center gap-2"><Fingerprint size={14}/> Special Characters</span>
          {getRiskBadge(structure?.specialCharRisk)}
        </div>
        <div className="flex justify-between items-center text-sm border-b pb-2">
          <span className="text-slate-500 flex items-center gap-2"><Fingerprint size={14}/> Subdomain Depth</span>
          {getRiskBadge(structure?.subdomainRisk)}
        </div>
        <div className="flex justify-between items-center text-sm pt-1">
          <span className="text-slate-500 font-bold">IP-Based Host</span>
          <Badge variant={structure?.ipBased ? "destructive" : "secondary"}>
            {structure?.ipBased ? "MALICIOUS PATTERN" : "STANDARD"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};