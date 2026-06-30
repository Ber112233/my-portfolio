import {
  Activity,
  BellRing,
  Box,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  GitBranch,
  KeyRound,
  Layers,
  LayoutDashboard,
  Network,
  Route,
  Server,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";

export const problemChain = [
  "El cliente escribe",
  "Un empleado responde",
  "Anota el pedido",
  "Envía el mensaje",
  "Actualiza el Excel",
  "Hace seguimiento",
  "Envía promociones",
  "Genera reportes a mano",
  "Pierde tiempo",
  "Pierde dinero",
];

export const approachChecklist = [
  "Tareas repetitivas",
  "Procesos manuales",
  "Errores frecuentes",
  "Cuellos de botella",
  "Pérdidas de tiempo",
];

export const services = [
  {
    icon: Workflow,
    title: "Automatización Empresarial",
    description: "Procesos que hoy dependen de una persona, corriendo solos.",
    items: [
      "Automatización de procesos repetitivos",
      "Integración entre plataformas",
      "Generación automática de documentos",
      "Flujos inteligentes",
    ],
  },
  {
    icon: Sparkles,
    title: "Inteligencia Artificial",
    description: "IA aplicada a problemas reales del negocio, no a demos.",
    items: [
      "Asistentes virtuales",
      "Chatbots entrenados con la información del negocio",
      "Procesamiento inteligente de documentos",
      "Análisis de información",
      "Clasificación automática de consultas",
    ],
  },
  {
    icon: Cloud,
    title: "AWS Cloud",
    description: "Arquitecturas escalables que crecen junto a tu operación.",
    items: [
      "AWS Lambda",
      "Amazon S3",
      "SNS y SQS",
      "EventBridge",
      "API Gateway",
      "CloudWatch",
      "Step Functions",
      "Serverless y escalabilidad bajo demanda",
    ],
  },
  {
    icon: Code2,
    title: "Desarrollo Web",
    description: "Software a medida cuando lo genérico ya no alcanza.",
    items: [
      "Sitios corporativos",
      "Landing pages",
      "Paneles administrativos",
      "Portales para clientes",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards",
    description: "Tus indicadores, claros y en un solo lugar.",
    items: ["Ventas", "Inventario", "Procesos", "KPIs"],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Reunión inicial",
    description:
      "Conversamos sobre tu negocio, qué te está frenando y qué resultado estás buscando.",
  },
  {
    number: "02",
    title: "Análisis del negocio",
    description:
      "Me siento a entender cómo funciona tu empresa hoy: tu equipo, tus herramientas, tu día a día.",
  },
  {
    number: "03",
    title: "Identificación de procesos críticos",
    description:
      "Encuentro dónde se está yendo el tiempo, dónde aparecen los errores y qué te está frenando para crecer.",
  },
  {
    number: "04",
    title: "Diseño de arquitectura",
    description:
      "Defino la solución técnica que tiene sentido para tu caso: automatización, IA, cloud, o una mezcla de las tres.",
  },
  {
    number: "05",
    title: "Desarrollo",
    description:
      "Construyo la solución con estándares pensados para producción, no para una demo bonita.",
  },
  {
    number: "06",
    title: "Implementación",
    description:
      "La pongo en marcha sin frenar tu operación del día a día, y capacito a tu equipo para usarla.",
  },
  {
    number: "07",
    title: "Seguimiento",
    description:
      "Mido resultados, ajusto lo que haga falta y hago crecer la solución junto con tu negocio.",
  },
];

type FlagshipCase =
  | {
      number: string;
      title: string;
      summary: string;
      flow: string[];
      benefit: string;
    }
  | {
      number: string;
      title: string;
      summary: string;
      tags: string[];
      benefit: string;
    };

export const flagshipCases: FlagshipCase[] = [
  {
    number: "01",
    title: "Monitoreo automático de plataformas de compra y venta",
    summary:
      "Un sistema construido sobre AWS que vigila plataformas específicas de forma continua y avisa apenas aparece algo que te interesa.",
    flow: [
      "AWS detecta el evento",
      "Se ejecuta una función Lambda",
      "Amazon Bedrock analiza la información y valida los criterios",
      "Si es relevante, Amazon SNS envía la notificación automáticamente",
      "El usuario recibe la alerta de inmediato",
    ],
    benefit: "No perder oportunidades importantes.",
  },
  {
    number: "02",
    title: "Sistema inteligente de atención al cliente",
    summary:
      "La mayoría de los chatbots responden un solo mensaje y después dejan al cliente esperando a que un humano continúe. Esto funciona distinto.",
    flow: [
      "Conoce el negocio a fondo: productos, precios, horarios",
      "Responde preguntas frecuentes y resuelve dudas al instante",
      "Escala la conversación a una persona solo cuando hace falta",
    ],
    benefit: "Disponibilidad 24/7, menos carga para tu equipo y mejor experiencia para el cliente.",
  },
  {
    number: "03",
    title: "Sistema inteligente de notificaciones",
    summary:
      "Construido con AWS, SNS, Lambda, EventBridge y CloudWatch para detectar eventos del negocio en cuanto pasan.",
    flow: [
      "Detecta automáticamente nuevos productos, promociones, cambios de inventario o pedidos importantes",
      "AWS ejecuta el flujo correspondiente",
      "SNS distribuye la notificación",
      "Llega por correo, SMS, WhatsApp o app móvil",
    ],
    benefit: "Información inmediata para tus clientes o tu equipo.",
  },
  {
    number: "04",
    title: "Automatización de procesos operativos",
    summary:
      "Pedidos, inventario, facturación, logística, producción, seguimiento y reportes, todo integrado en un solo flujo.",
    tags: [
      "Pedidos",
      "Inventario",
      "Facturación",
      "Logística",
      "Producción",
      "Seguimiento",
      "Reportes",
    ],
    benefit: "Todo conectado, sin reprocesos manuales entre áreas.",
  },
  {
    number: "05",
    title: "Dashboards inteligentes",
    summary:
      "Visualización en tiempo real de lo que está pasando en tu negocio, sin esperar a fin de mes para enterarte.",
    tags: ["Ventas", "Clientes", "Inventario", "Producción", "Indicadores", "Reportes automáticos"],
    benefit: "Decisiones con datos, no con intuición.",
  },
];

export const awsHubServices = [
  { icon: Server, label: "EC2" },
  { icon: Zap, label: "Lambda" },
  { icon: Database, label: "S3" },
  { icon: BellRing, label: "SNS" },
  { icon: Layers, label: "SQS" },
  { icon: BrainCircuit, label: "Bedrock" },
  { icon: GitBranch, label: "EventBridge" },
  { icon: Network, label: "API Gateway" },
];

export const awsCategories = [
  {
    title: "Cómputo & Backend",
    items: [
      { icon: Server, label: "EC2" },
      { icon: Zap, label: "Lambda" },
      { icon: Code2, label: "Node.js" },
      { icon: Box, label: "Docker" },
    ],
  },
  {
    title: "Mensajería & Eventos",
    items: [
      { icon: BellRing, label: "SNS" },
      { icon: Layers, label: "SQS" },
      { icon: GitBranch, label: "EventBridge" },
      { icon: Route, label: "Step Functions" },
    ],
  },
  {
    title: "Datos & IA",
    items: [
      { icon: Database, label: "S3" },
      { icon: BrainCircuit, label: "Bedrock" },
      { icon: Activity, label: "CloudWatch" },
    ],
  },
  {
    title: "Control & Acceso",
    items: [
      { icon: KeyRound, label: "IAM" },
      { icon: Network, label: "API Gateway" },
      { icon: GithubIcon, label: "GitHub" },
    ],
  },
];
