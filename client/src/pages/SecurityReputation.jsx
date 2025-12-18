import { ShieldAlert, ShieldCheck, Lock, Unlock, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const SecurityReputation = ({ reputation, ssl }) => {
  return (
    <Card className="shadow-lg border-t-4 border-t-blue-600 animate-in fade-in slide-in-from-left duration-700">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-blue-600" /> Security Reputation
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border">
          <span className="text-sm font-medium">Safe Browsing</span>
          {reputation?.blacklisted ? (
            <Badge variant="destructive" className="animate-bounce">Blacklisted</Badge>
          ) : (
            <Badge className="bg-green-500">Clean</Badge>
          )}
        </div>

        {/* Dynamic Threat Tags */}
        {reputation?.threats?.length > 0 && (
          <div className="p-3 bg-red-50 rounded-lg border border-red-100">
            <p className="text-[10px] uppercase font-bold text-red-600 mb-2">Detected Threats</p>
            <div className="flex flex-wrap gap-2">
              {reputation.threats.map((threat) => (
                <Badge key={threat} variant="outline" className="bg-white text-red-700 border-red-200">
                  <AlertCircle size={10} className="mr-1" /> {threat}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border">
          <div className="flex items-center gap-2 text-sm font-medium">
            {ssl?.valid ? <Lock size={16} className="text-green-600" /> : <Unlock size={16} className="text-red-600" />}
            SSL Status
          </div>
          <span className="text-xs font-bold text-slate-500">{ssl?.issuer || 'No Issuer'}</span>
        </div>
      </CardContent>
    </Card>
  );
};