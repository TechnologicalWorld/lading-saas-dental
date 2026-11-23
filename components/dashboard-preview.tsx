import type { ReactElement } from "react";
import { CalendarDays, ChevronDown, MoreHorizontal, UsersRound } from "lucide-react";

const chart = [42, 64, 52, 78, 60, 87, 70];
const appointments = [
  ["09:00", "Laura Méndez", "Control", "Confirmada", "bg-emerald-50 text-emerald-700"],
  ["10:30", "Marcos Rojas", "Ortodoncia", "En espera", "bg-amber-50 text-amber-700"],
  ["12:00", "Sofía Vargas", "Evaluación", "Confirmada", "bg-emerald-50 text-emerald-700"],
];

export function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[690px] lg:mx-0">
      <div className="preview-shadow overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-2 sm:p-3">
        <div className="overflow-hidden rounded-[1.1rem] border border-slate-100 bg-slate-50/80">
          <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 sm:px-5">
            <div className="flex items-center gap-2"><span className="grid size-7 place-items-center rounded-lg bg-teal-600 text-[10px] font-bold text-white">D</span><span className="text-xs font-bold text-slate-900 sm:text-sm">Vista general</span></div>
            <button type="button" className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] font-semibold text-slate-600 sm:text-xs" aria-label="Sucursal seleccionada: Central">Sucursal Central <ChevronDown className="size-3" /></button>
          </div>
          <div className="grid gap-3 p-3 sm:grid-cols-[1fr_1fr_1.15fr] sm:p-4">
            <Metric icon={<CalendarDays />} label="Citas de hoy" value="18" trend="+3 esta semana" />
            <Metric icon={<UsersRound />} label="Pacientes" value="1,248" trend="+24 este mes" />
            <div className="rounded-xl border border-slate-200 bg-white p-3">
              <div className="flex justify-between"><p className="text-[10px] font-medium text-slate-500 sm:text-xs">Tasa de atención</p><MoreHorizontal className="size-4 text-slate-400" /></div>
              <p className="mt-1 text-xl font-bold text-slate-900">92%</p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100"><div className="h-full w-[92%] rounded-full bg-teal-500" /></div>
            </div>
          </div>
          <div className="grid gap-3 px-3 pb-3 sm:grid-cols-[1.35fr_.9fr] sm:px-4 sm:pb-4">
            <div className="rounded-xl border border-slate-200 bg-white p-3 sm:p-4">
              <div className="flex items-center justify-between"><div><p className="text-xs font-bold text-slate-800 sm:text-sm">Citas esta semana</p><p className="text-[10px] text-slate-400">Últimos 7 días</p></div><span className="text-[10px] font-bold text-emerald-600">+12.5%</span></div>
              <div className="mt-5 flex h-24 items-end gap-2 sm:h-28 sm:gap-3" aria-label="Gráfico de citas de los últimos siete días">
                {chart.map((height, index) => <div key={index} className="flex h-full flex-1 flex-col justify-end gap-2"><div className={`rounded-t-sm ${index === 5 ? "bg-teal-500" : "bg-teal-100"}`} style={{ height: `${height}%` }} /><span className="text-center text-[8px] font-medium text-slate-400">{["L", "M", "M", "J", "V", "S", "D"][index]}</span></div>)}
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3 sm:p-4">
              <p className="text-xs font-bold text-slate-800 sm:text-sm">Actividad reciente</p>
              <div className="mt-3 space-y-3">
                {["Cita confirmada", "Pago registrado", "Paciente actualizado"].map((text, index) => <div key={text} className="flex gap-2"><span className={`mt-1 size-2 shrink-0 rounded-full ${index === 1 ? "bg-blue-500" : "bg-teal-500"}`} /><div><p className="text-[10px] font-semibold text-slate-700">{text}</p><p className="text-[9px] text-slate-400">Hace {index * 7 + 2} min</p></div></div>)}
              </div>
            </div>
          </div>
          <div className="mx-3 mb-3 overflow-hidden rounded-xl border border-slate-200 bg-white sm:mx-4 sm:mb-4">
            <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2.5"><p className="text-xs font-bold text-slate-800 sm:text-sm">Próximas citas</p><span className="text-[10px] font-semibold text-teal-700">Ver agenda</span></div>
            {appointments.map(([time, name, type, status, color]) => <div key={time} className="grid grid-cols-[38px_1fr_auto] items-center gap-2 border-b border-slate-100 px-3 py-2 last:border-0 sm:grid-cols-[45px_1.1fr_1fr_auto]"><span className="text-[10px] font-bold text-slate-700">{time}</span><div><p className="text-[10px] font-semibold text-slate-800">{name}</p><p className="text-[9px] text-slate-400 sm:hidden">{type}</p></div><span className="hidden text-[10px] text-slate-500 sm:block">{type}</span><span className={`rounded-full px-2 py-1 text-[8px] font-bold ${color}`}>{status}</span></div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric({ icon, label, value, trend }: { icon: ReactElement<{ className?: string }>; label: string; value: string; trend: string }) {
  return <div className="rounded-xl border border-slate-200 bg-white p-3"><div className="flex items-center justify-between"><p className="text-[10px] font-medium text-slate-500 sm:text-xs">{label}</p><span className="text-teal-600 [&>svg]:size-3.5">{icon}</span></div><p className="mt-1 text-xl font-bold text-slate-900">{value}</p><p className="mt-1 text-[9px] font-medium text-emerald-600">{trend}</p></div>;
}
