(function(){
  // Two kinds of i18n binding:
  //   data-i18n="key"        → safe text replacement (preserves .arr child)
  //   data-i18n-html="key"   → HTML replacement (for titles with inline color spans)
  //   data-i18n-attr="attr|key" → attribute replacement (placeholder, title, etc.)
  const dict = {
    en: {
      'nav.about':'About','nav.expertise':'Expertise','nav.fit':'Fit','nav.services':'Services','nav.process':'Process','nav.contact':'Contact','nav.cta':'Book a call',
      'hero.eyebrow':'Now booking · US market focus',
      'hero.title':'I help founders <span class="pop">launch</span> and <span class="pop2">scale</span> e-commerce brands — with a focus on the <span class="pop3">US market</span>.',
      'hero.sub':"I’m Ilia — an e-commerce founder and consultant. Over the last 10+ years I’ve built products, brands and sales channels from the ground up. Now I help other founders turn their products into scalable e-commerce businesses, with a focus on the US market.",
      'hero.cta1':'See services','hero.cta2':'Book a 30-min call','hero.avail':'Open for new projects',
      'hero.sticker':'US Market<br/>Specialist ★','hero.badge':'10+ years · 7-figure brand built',
      'stat.1':'years building e-commerce brands end-to-end','stat.2':'revenue scaled from zero on my own accessory brand','stat.3':'market in focus — the United States','stat.4':'SKUs designed, sourced, launched and iterated',
      'about.kicker':'About',
      'about.title':'Practical e-commerce consulting from a founder who has <em>built and scaled a brand himself.</em>',
      'about.lead':"I built a women's accessories brand from a single SKU to <em>seven-figure revenue</em> — owning product, design, manufacturing, packaging, marketplaces, wholesale, logistics and the launch into the United States.",
      'about.p1':"I’ve dealt with the details most strategies skip: return rates, marketplace images, unit economics, Amazon US launch costs, TikTok Shop setup, fulfillment and cash flow.",
      'about.p2':"",
      'about.l1.t':'Built and scaled my own brand','about.l1.d':'From concept and packaging to wholesale and marketplaces.',
      'about.l2.t':'China sourcing & contract manufacturing','about.l2.d':'Suppliers, QC, labelling, imports, B2B shipments.',
      'about.l3.t':'Trend-to-SKU operator','about.l3.d':'Demand signals → product → test → scale.',
      'about.l4.t':'US market launches','about.l4.d':'Amazon, TikTok Shop and Shopify DTC with disciplined unit economics.',
      'about.l5.t':"Designer's eye, operator's spreadsheet",'about.l5.d':'10+ years in branding, packaging, ad creative and product cards.',
      'exp.kicker':'Expertise','exp.title':'Where I bring <em>the most value.</em>',
      'exp.1.t':'Marketplace & e-commerce operations','exp.1.d':'Listings, pricing, logistics, returns, commissions, unit economics and assortment planning — in competitive categories where speed, pricing and execution matter.',
      'exp.2.t':'Product & trend strategy','exp.2.d':'Turning trends into commercial SKUs. The pipeline: trend → demand check → product → test → scale.',
      'exp.3.t':'US market entry','exp.3.d':'Hands-on with US launches — Amazon, TikTok Shop US, Shopify/DTC, influencer marketing, US payments, warehousing and import flows.',
      'exp.4.t':'Branding, design & packaging','exp.4.d':'10+ years of brand and creative work: identity, packaging, product cards, collections, digital and ad creative — design that helps products sell, not just look good.',
      'exp.5.t':'Fractional Head of E-commerce','exp.5.d':'I join part-time as a senior operator: strategy, team, contractors, metrics and growth — when you need someone to build, not just advise.',
      'us.kicker':'One market in focus',
      'us.title':"The United States — <em>the world's largest e-commerce market.</em>",
      'us.desc':"I focus on helping brands enter the US market because it offers the largest growth potential. Amazon, TikTok Shop US, Shopify DTC, US fulfillment and import setup — connected into one practical launch plan.",
      'us.badge':'100% US Focused',
      'fit.kicker':'Who this is for',
      'fit.title':'My focus: taking products <em>from $0 to $1M</em> a year in revenue.',
      'fit.lead':"That's the journey I've walked with my own brand. It's also the only journey I claim to know cold. If you're past $1M ARR and looking for the next 10x, I'm not your person — and I'll tell you in the first call.",
      'fit.good.t':'A good fit',
      'fit.good.1':'Early-stage e-commerce brands & founders',
      'fit.good.2':'Products doing $0–$50K/month, aiming for $1M/year',
      'fit.good.3':'First serious US launch (Amazon, TikTok Shop, Shopify)',
      'fit.good.4':'Founders who want a builder, not just an adviser',
      'fit.not.t':'Not the right fit',
      'fit.not.1':'Already past $1M ARR, pushing toward $10M+',
      'fit.not.2':'Enterprise or large-scale operations',
      'fit.not.3':'Pure brand consulting with no commercial execution',
      'svc.kicker':'Services & pricing','svc.title':'Four ways to work together — <em>from a single call to a full launch.</em>',
      'svc.book':'Book now','svc.start':'Start audit','svc.plan':'Plan launch','svc.kickoff':'Kick off','svc.included':"What's included",
      'svc.1.t':'30-minute consultation','svc.1.d':'A short call to unblock one specific question — marketplace, channel, pricing, sourcing, launch. Bring the question; you leave with a direction.','svc.1.unit':'flat · 30 min',
      'svc.2.t':'E-commerce growth audit','svc.2.d':'A structured review of your business — assortment, margins, channels, marketplaces, returns, fulfilment — to surface the products that actually make money and the bottlenecks holding you back.','svc.2.unit':'fixed scope',
      'svc.2.l1':'Assortment & SKU analysis','svc.2.l2':'Margin & profitability breakdown','svc.2.l3':'Sales channel review','svc.2.l4':'Website / Shopify / marketplace audit','svc.2.l5':'Pricing, returns & fulfilment check','svc.2.l6':'Top profit-driving products identified','svc.2.l7':'Growth bottlenecks & next steps',
      'svc.3.t':'Scaling & entering the US market','svc.3.d':'A go-to-market plan for the US — assortment adaptation, pricing, marketplace selection, fulfilment, unit economics and a disciplined MVP launch plan.','svc.3.unit':'strategy package',
      'svc.3.l1':'US channel selection (Amazon / TikTok Shop / Shopify)','svc.3.l2':'Assortment adaptation','svc.3.l3':'US pricing strategy','svc.3.l4':'Marketplace analysis','svc.3.l5':'US fulfilment & logistics','svc.3.l6':'Offer localisation','svc.3.l7':'Unit economics calculation','svc.3.l8':'Test-launch plan',
      'svc.4.t':'Full product launch — concept to live sales','svc.4.d':"Turnkey: I take a supplier's product and launch it in US e-commerce. Product analysis and adjustments, LLC formation, opening an account outside Russia and a company bank account.",'svc.4.unit':'end-to-end',
      'svc.4.l1':'Product & assortment audit','svc.4.l2':'Branding & visual identity audit','svc.4.l3':'US company formation & business bank account',
      'proc.kicker':'How we work','proc.title':'From the first call <em>to metrics growth.</em>',
      'proc.1.n':'Step 01','proc.1.t':'Intro call','proc.1.d':'A 30-minute call to understand the business, the goal and what is currently blocking growth.','proc.1.m':'Baseline',
      'proc.2.n':'Step 02','proc.2.t':'Audit & proposal','proc.2.d':'Diagnostic of the current state, clear scope, timeline and price — fixed where possible, no surprise invoices.','proc.2.m':'+ clarity',
      'proc.3.n':'Step 03','proc.3.t':'Hands-on work','proc.3.d':'I build, audit or operate — with weekly check-ins and a shared workspace.','proc.3.m':'+ revenue',
      'proc.4.n':'Step 04','proc.4.t':'Handover & growth','proc.4.d':'Documented playbook, KPIs in place and an optional retainer to keep momentum.','proc.4.m':'Scale',
      'cta.title':"Got a product, a channel, or a question? <em>Let's talk.</em>",
      'cta.sub':"Most engagements start with a 30-minute call. Bring the messy version of the problem — that's the one worth solving.",
      'cta.book':'Book a 30-min call','cta.email':'Email me directly',
      'contact.kicker':'Contact','contact.title':'Tell me about your business.',
      'form.name':'Name','form.email':'Email','form.company':'Company / brand','form.interest':"I'm interested in",
      'form.opt1':'30-minute consultation — €110','form.opt2':'Growth audit — €800','form.opt3':'Scaling to US — €1,600','form.opt4':'Full product launch — €2,990','form.opt5':'Fractional Head of E-commerce','form.opt6':'Something else',
      'form.msg':'Tell me about the project','form.msg.ph':'Stage, category, current channels, what is blocking growth…',
      'form.submit':'Send message','form.note':'Reply within 1–2 working days.','form.sent':"✓ Got it — I'll be in touch.",'form.err':'Something went wrong. Please email me directly.',
      'foot.tag':'E-commerce, marketplace and growth consulting for early-stage brands going from $0 to $1M a year — with a focus on the US market.',
      'foot.work':'Work with me','foot.svc1':'30-min consultation','foot.svc2':'Growth audit','foot.svc3':'Scaling to US','foot.svc4':'Full product launch',
      'foot.expertise':'Expertise','foot.e1':'Marketplaces','foot.e2':'Product & trends','foot.e3':'US market entry','foot.e4':'Branding & packaging',
      'foot.contact':'Contact','foot.linkedin':'LinkedIn','foot.instagram':'Telegram',
      'foot.role':'E-commerce & Marketplace Consultant','foot.based':'US market focus · Working worldwide',
      'foot.privacy':'Privacy Policy','foot.legal':'Legal Notice'
    },
    es: {
      'nav.about':'Sobre mí','nav.expertise':'Experiencia','nav.fit':'Encaje','nav.services':'Servicios','nav.process':'Proceso','nav.contact':'Contacto','nav.cta':'Reservar llamada',
      'hero.eyebrow':'Acepto nuevos proyectos · enfoque en EE. UU.',
      'hero.title':'Ayudo a marcas de e-commerce a <span class="pop">lanzar</span>, <span class="pop2">vender más</span> y entrar en <span class="pop3">EE. UU.</span>',
      'hero.sub':"Soy Ilia, fundador y consultor de e-commerce con más de 10 años de experiencia en producto, marca y marketplaces. Ayudo a marcas a desarrollar productos con potencial comercial, mejorar sus ventas online y entrar en el mercado de Estados Unidos.",
      'hero.cta1':'Ver servicios','hero.cta2':'Reservar llamada de 30 min','hero.avail':'Acepto nuevos proyectos',
      'hero.sticker':'Especialista<br/>mercado EE. UU. ★','hero.badge':'10+ años · marca propia con facturación de 7 cifras',
      'stat.1':'años construyendo marcas de e-commerce de principio a fin','stat.2':'facturación escalada desde cero en mi propia marca','stat.3':'mercado en foco — Estados Unidos','stat.4':'SKUs diseñados, producidos, lanzados e iterados',
      'about.kicker':'Sobre mí',
      'about.title':'Consultoría de e-commerce basada en <em>experiencia real, no en teoría.</em>',
      'about.lead':'Construí una marca de accesorios de mujer desde un solo SKU hasta una <em>facturación de 7 cifras</em>, gestionando producto, diseño, fabricación, packaging, marketplaces, venta mayorista, logística y entrada en Estados Unidos.',
      'about.p1':'Por eso no hablo solo desde la teoría. Sé cómo una pequeña mejora en la tasa de devoluciones afecta al P&L, qué tipo de imagen mejora la conversión en marketplaces, cuánto puede costar lanzar en Amazon US desde fuera de Estados Unidos y qué partes de TikTok Shop importan al empezar desde cero.',
      'about.p2':'Trabajo con fundadores que no tienen tiempo para aprenderlo todo por ensayo y error, y con equipos que necesitan un operador senior que se incorpore durante unos meses para mover el negocio.',
      'about.l1.t':'Construí y escalé mi propia marca','about.l1.d':'Del concepto y el packaging al canal mayorista y los marketplaces.',
      'about.l2.t':'Sourcing en China y fabricación a contrato','about.l2.d':'Proveedores, control de calidad, etiquetado, importación, envíos B2B.',
      'about.l3.t':'De tendencia a SKU','about.l3.d':'Señales de demanda → producto → test → escalado.',
      'about.l4.t':'Lanzamientos en EE. UU.','about.l4.d':'Amazon, TikTok Shop y Shopify DTC con unit economics disciplinada.',
      'about.l5.t':'Ojo de diseñador, hoja de cálculo de operador','about.l5.d':'10+ años en branding, packaging, creatividad publicitaria y fichas de producto.',
      'exp.kicker':'Experiencia','exp.title':'Áreas donde <em>puedo aportar más valor.</em>',
      'exp.1.t':'Operaciones de marketplace y e-commerce','exp.1.d':'Fichas, pricing, logística, devoluciones, comisiones, unit economics y planificación del surtido — en categorías competitivas donde importan la velocidad, el precio y la ejecución.',
      'exp.2.t':'Estrategia de producto y tendencias','exp.2.d':'Convertir tendencias en SKUs comerciales. El flujo: tendencia → validación de demanda → producto → test → escalar.',
      'exp.3.t':'Entrada al mercado de EE. UU.','exp.3.d':'Lanzamientos prácticos en EE. UU. — Amazon, TikTok Shop US, Shopify/DTC, influencer marketing, pagos en EE. UU., almacenamiento y flujos de importación.',
      'exp.4.t':'Branding, diseño y packaging','exp.4.d':'10+ años de marca y creatividad: identidad, packaging, fichas de producto, colecciones, digital y publicidad — diseño pensado para vender, no solo para verse bien.',
      'exp.5.t':'Fractional Head of E-commerce','exp.5.d':'Operador senior a tiempo parcial: estrategia, equipo, proveedores, métricas y crecimiento — para los trimestres en los que necesitas a alguien que construya, no a otro asesor.',
      'us.kicker':'Un mercado en foco',
      'us.title':'Estados Unidos — <em>el mayor mercado de e-commerce del mundo.</em>',
      'us.desc':'Me concentro en ayudar a marcas a entrar en el mercado de Estados Unidos porque es donde está el mayor potencial de crecimiento. Amazon, TikTok Shop US, Shopify DTC, fulfillment en EE. UU. e importación — todo conectado en un plan de lanzamiento práctico.',
      'us.badge':'100% enfocado en EE. UU.',
      'fit.kicker':'Para quién trabajo',
      'fit.title':'Mi foco: llevar productos <em>de 0 a 1 M$</em> de facturación al año.',
      'fit.lead':'Es el camino que recorrí con mi propia marca. Y es el único que conozco a fondo. Si ya superaste el millón al año y buscas el siguiente 10x, no soy la persona indicada — te lo diré en la primera llamada.',
      'fit.good.t':'Buen encaje',
      'fit.good.1':'Marcas y fundadores de e-commerce en fase inicial',
      'fit.good.2':'Productos que facturan 0–50 K$/mes y apuntan a 1 M$/año',
      'fit.good.3':'Primer lanzamiento serio en EE. UU. (Amazon, TikTok Shop, Shopify)',
      'fit.good.4':'Fundadores que quieren a alguien que construya, no solo asesore',
      'fit.not.t':'No es el encaje',
      'fit.not.1':'Ya por encima de 1 M$ al año, buscando 10 M$+',
      'fit.not.2':'Operaciones enterprise o a gran escala',
      'fit.not.3':'Consultoría pura de marca sin ejecución comercial',
      'svc.kicker':'Servicios y precios','svc.title':'Cuatro formas de trabajar juntos — <em>de una llamada a un lanzamiento completo.</em>',
      'svc.book':'Reservar','svc.start':'Iniciar auditoría','svc.plan':'Planificar lanzamiento','svc.kickoff':'Empezar','svc.included':'Qué incluye',
      'svc.1.t':'Consulta de 30 minutos','svc.1.d':'Una llamada corta para desbloquear una pregunta concreta — marketplace, canal, pricing, sourcing, lanzamiento. Tú traes la pregunta; te llevas una dirección.','svc.1.unit':'tarifa fija · 30 min',
      'svc.2.t':'Auditoría de crecimiento e-commerce','svc.2.d':'Una revisión estructurada de tu negocio — surtido, márgenes, canales, marketplaces, devoluciones, fulfilment — para identificar los productos que realmente ganan dinero y los cuellos de botella que te frenan.','svc.2.unit':'alcance fijo',
      'svc.2.l1':'Análisis de surtido y SKU','svc.2.l2':'Desglose de márgenes y rentabilidad','svc.2.l3':'Revisión de canales de venta','svc.2.l4':'Auditoría de web / Shopify / marketplaces','svc.2.l5':'Pricing, devoluciones y fulfilment','svc.2.l6':'Productos que realmente generan beneficio','svc.2.l7':'Cuellos de botella y próximos pasos',
      'svc.3.t':'Escalado y entrada en el mercado de EE. UU.','svc.3.d':'Un plan de salida al mercado para EE. UU. — adaptación de surtido, pricing, selección de marketplace, fulfilment, unit economics y un plan de lanzamiento MVP disciplinado.','svc.3.unit':'paquete estratégico',
      'svc.3.l1':'Selección de canal en EE. UU. (Amazon / TikTok Shop / Shopify)','svc.3.l2':'Adaptación del surtido','svc.3.l3':'Estrategia de pricing para EE. UU.','svc.3.l4':'Análisis de marketplaces','svc.3.l5':'Fulfilment y logística en EE. UU.','svc.3.l6':'Localización de la oferta','svc.3.l7':'Cálculo de unit economics','svc.3.l8':'Plan de lanzamiento de prueba',
      'svc.4.t':'Lanzamiento completo — del concepto a las ventas','svc.4.d':'Llave en mano: tomo el producto de un proveedor y lo lanzo al e-commerce de EE. UU. Análisis y ajuste del producto, constitución de una LLC, apertura de cuenta fuera de Rusia y cuenta de empresa.','svc.4.unit':'integral',
      'svc.4.l1':'Auditoría de producto y surtido','svc.4.l2':'Auditoría de branding e identidad visual','svc.4.l3':'Constitución de la empresa y apertura de cuenta bancaria en EE. UU.',
      'proc.kicker':'Cómo trabajamos','proc.title':'De la primera llamada <em>al crecimiento de las métricas.</em>',
      'proc.1.n':'Etapa 01','proc.1.t':'Llamada inicial','proc.1.d':'30 minutos para entender el negocio, la pregunta y dónde está la palanca.','proc.1.m':'Punto de partida',
      'proc.2.n':'Etapa 02','proc.2.t':'Auditoría y propuesta','proc.2.d':'Diagnóstico del estado actual, alcance, plazos y precio claros — fijos cuando es posible, sin facturas sorpresa.','proc.2.m':'+ claridad',
      'proc.3.n':'Etapa 03','proc.3.t':'Trabajo práctico','proc.3.d':'Construyo, audito u opero — con reuniones semanales y un espacio de trabajo compartido.','proc.3.m':'+ ingresos',
      'proc.4.n':'Etapa 04','proc.4.t':'Entrega y crecimiento','proc.4.d':'Playbook documentado, KPIs en marcha y soporte mensual opcional para mantener el ritmo.','proc.4.m':'Escala',
      'cta.title':'¿Tienes un producto, un canal o una pregunta? <em>Hablemos.</em>',
      'cta.sub':'La mayoría de los proyectos empiezan con una llamada de 30 minutos. Trae la versión cruda del problema — esa es la que vale la pena resolver.',
      'cta.book':'Reservar llamada de 30 min','cta.email':'Escríbeme directamente',
      'contact.kicker':'Contacto','contact.title':'Cuéntame sobre tu negocio.',
      'form.name':'Nombre','form.email':'Email','form.company':'Empresa / marca','form.interest':'Me interesa',
      'form.opt1':'Consulta 30 min — 110 €','form.opt2':'Auditoría de crecimiento — 800 €','form.opt3':'Escalado a EE. UU. — 1.600 €','form.opt4':'Lanzamiento completo — 2.990 €','form.opt5':'Fractional Head of E-commerce','form.opt6':'Otra cosa',
      'form.msg':'Cuéntame sobre el proyecto','form.msg.ph':'Etapa, categoría, canales actuales, qué frena el crecimiento…',
      'form.submit':'Enviar mensaje','form.note':'Respondo en 1–2 días laborables.','form.sent':'✓ Recibido — te contesto pronto.','form.err':'Algo salió mal. Escríbeme directamente por email.',
      'foot.tag':'Consultoría de e-commerce, marketplaces y crecimiento para marcas en fase inicial que van de 0 a 1 M$/año — con foco en el mercado de EE. UU.',
      'foot.work':'Trabajar conmigo','foot.svc1':'Consulta 30 min','foot.svc2':'Auditoría de crecimiento','foot.svc3':'Escalado a EE. UU.','foot.svc4':'Lanzamiento completo',
      'foot.expertise':'Experiencia','foot.e1':'Marketplaces','foot.e2':'Producto y tendencias','foot.e3':'Entrada a EE. UU.','foot.e4':'Branding y packaging',
      'foot.contact':'Contacto','foot.linkedin':'LinkedIn','foot.instagram':'Telegram',
      'foot.role':'Consultor de E-commerce y Marketplaces','foot.based':'Enfoque en EE. UU. · Trabajo en todo el mundo',
      'foot.privacy':'Política de Privacidad','foot.legal':'Aviso Legal'
    },
    ru: {
      'nav.about':'Обо мне','nav.expertise':'Экспертиза','nav.fit':'Кому подхожу','nav.services':'Услуги','nav.process':'Процесс','nav.contact':'Контакты','nav.cta':'Записаться',
      'hero.eyebrow':'Записываю · фокус на рынок США',
      'hero.title':'<span class="pop">Запускаю</span>, <span class="pop2">масштабирую</span> и <span class="pop3">усиливаю</span> e-commerce бренды.',
      'hero.sub':'Я Илья — предприниматель и консультант с 10+ годами опыта в продукте, бренде и каналах продаж. Помогаю селлерам и брендам выводить трендовые SKU и заходить на рынок США — крупнейший e-commerce-рынок в мире.',
      'hero.cta1':'Услуги','hero.cta2':'Записаться на 30 минут','hero.avail':'Беру новые проекты',
      'hero.sticker':'Специалист<br/>по рынку США ★','hero.badge':'10+ лет · бренд с миллионными оборотами',
      'stat.1':'лет строю e-commerce-бренды под ключ','stat.2':'оборот собственного бренда аксессуаров с нуля','stat.3':'рынок в фокусе — Соединённые Штаты','stat.4':'SKU спроектировано, произведено и запущено',
      'about.kicker':'Обо мне',
      'about.title':'Практический e-commerce консалтинг от предпринимателя, который <em>сам прошёл путь от запуска до масштабирования.</em>',
      'about.lead':'Я построил бренд женских аксессуаров с одного SKU до <em>миллионных оборотов</em> — отвечая за продукт, дизайн, производство, упаковку, маркетплейсы, опт, логистику и выход на рынок США.',
      'about.p1':'Это значит, что когда мы говорим о вашем бизнесе, я уже знаю, как влияет на P&L снижение возвратов на 2%, почему фото карточки 1080×1440 конвертит лучше, во что реально обходится запуск на Amazon US из-за рубежа и какие детали TikTok Shop важны, когда вы стартуете с нуля.',
      'about.p2':'Работаю с фаундерами, у которых нет времени учиться этому медленно — и с командами, которым нужен сильный оператор на квартал, чтобы сдвинуть метрики.',
      'about.l1.t':'Построил и масштабировал собственный бренд','about.l1.d':'От концепции и упаковки до опта и маркетплейсов.',
      'about.l2.t':'Закупки в Китае и контрактное производство','about.l2.d':'Поставщики, QC, маркировка, импорт, B2B-отгрузки.',
      'about.l3.t':'Тренды → SKU','about.l3.d':'Сигналы спроса → продукт → тест → масштаб.',
      'about.l4.t':'Запуски на рынке США','about.l4.d':'Amazon, TikTok Shop и Shopify DTC с дисциплинированной юнит-экономикой.',
      'about.l5.t':'Глаз дизайнера, дотошность финансиста','about.l5.d':'10+ лет в брендинге, упаковке, рекламе и карточках товаров.',
      'exp.kicker':'Экспертиза','exp.title':'Пять вещей, в которых я <em>принесу наибольшую пользу.</em>',
      'exp.1.t':'Маркетплейсы и e-commerce-операции','exp.1.d':'Карточки, цены, логистика, возвраты, комиссии, юнит-экономика и ассортиментная матрица — в высококонкурентных категориях, где побеждает скорость вывода.',
      'exp.2.t':'Продукт и трендовая стратегия','exp.2.d':'Превращаю тренды в коммерческие SKU. Пайплайн: тренд → оценка спроса → продукт → тест → масштаб.',
      'exp.3.t':'Выход на рынок США','exp.3.d':'Практический опыт запусков в США — Amazon, TikTok Shop US, Shopify/DTC, инфлюенсеры, локальные платежи, склады, схемы импорта и готовый пул надёжных партнёров.',
      'exp.4.t':'Брендинг, дизайн и упаковка','exp.4.d':'10+ лет в бренде и креативе: айдентика, упаковка, карточки, коллекции, digital и реклама — дизайн, который растит конверсию и снижает возвраты.',
      'exp.5.t':'Fractional Head of E-commerce','exp.5.d':'Подключаюсь как сильный оператор на part-time: стратегия, команда, подрядчики, метрики, рост — для кварталов, когда нужен строитель, а не ещё один советник.',
      'us.kicker':'Один рынок в фокусе',
      'us.title':'Соединённые Штаты — <em>крупнейший e-commerce-рынок в мире.</em>',
      'us.desc':'Я сосредоточен на выводе брендов и продуктов в США — там самый высокий потолок. Amazon, TikTok Shop US, Shopify DTC, US-фулфилмент и импортные схемы — всё в одном проекте.',
      'us.badge':'100% фокус на США',
      'fit.kicker':'Кому я подхожу',
      'fit.title':'Мой фокус: вырастить продукт <em>с 0 до $1M</em> выручки в год.',
      'fit.lead':'Это путь, который я сам прошёл со своим брендом. И это единственный этап, в котором я разбираюсь до деталей. Если вы уже прошли $1M в год и ищете следующий 10x — я не ваш человек, и я честно скажу это на первом же звонке.',
      'fit.good.t':'Подходит',
      'fit.good.1':'E-commerce бренды и фаундеры на ранней стадии',
      'fit.good.2':'Продукты с выручкой $0–$50K/мес с целью выйти на $1M/год',
      'fit.good.3':'Первый серьёзный запуск в США (Amazon, TikTok Shop, Shopify)',
      'fit.good.4':'Фаундеры, которым нужен строитель, а не просто советник',
      'fit.not.t':'Не подходит',
      'fit.not.1':'Уже прошли $1M в год, идёте к $10M+',
      'fit.not.2':'Enterprise и крупные операционные проекты',
      'fit.not.3':'Чистый бренд-консалтинг без коммерческой реализации',
      'svc.kicker':'Услуги и цены','svc.title':'Четыре формата работы — <em>от одной консультации до полного запуска.</em>',
      'svc.book':'Записаться','svc.start':'Начать аудит','svc.plan':'Спланировать запуск','svc.kickoff':'Начать проект','svc.included':'Что входит',
      'svc.1.t':'Консультация 30 минут','svc.1.d':'Короткая консультация по конкретному вопросу — продукт, канал, цены, поставки, запуск. Вы приходите с вопросом — уходите с направлением.','svc.1.unit':'фикс · 30 мин',
      'svc.2.t':'Аудит текущего бизнеса','svc.2.d':'Структурированный разбор: ассортимент, маржинальность, каналы, маркетплейсы, возвраты, фулфилмент — чтобы увидеть, какие товары реально дают прибыль и где узкие места роста.','svc.2.unit':'ищем слабые места',
      'svc.2.l1':'Анализ ассортимента и SKU','svc.2.l2':'Анализ маржинальности','svc.2.l3':'Разбор каналов продаж','svc.2.l4':'Анализ сайта / Shopify / маркетплейсов','svc.2.l5':'Проверка цен, возвратов, фулфилмента','svc.2.l6':'Товары, которые реально дают прибыль','svc.2.l7':'Узкие места роста и следующие шаги',
      'svc.3.t':'Масштабирование и выход на рынок США','svc.3.d':'Стратегия выхода в США — адаптация ассортимента, цены, выбор маркетплейса, фулфилмент, юнит-экономика и план MVP-запуска.','svc.3.unit':'стратегический пакет',
      'svc.3.l1':'Выбор канала в США (Amazon / TikTok Shop / Shopify)','svc.3.l2':'Адаптация ассортимента','svc.3.l3':'Ценообразование для США','svc.3.l4':'Анализ маркетплейсов','svc.3.l5':'Фулфилмент и логистика в США','svc.3.l6':'Локализация оффера','svc.3.l7':'Расчёт unit-экономики','svc.3.l8':'План тестового запуска',
      'svc.4.t':'Полный запуск продукта — от идеи до продаж','svc.4.d':'Под ключ: беру продукт поставщика и вывожу его в e-commerce США. Аналитика и корректировка товара, открытие LLC, счёта за пределами России и счёта компании.','svc.4.unit':'под ключ',
      'svc.4.l1':'Аудит продукта и ассортимента','svc.4.l2':'Аудит брендинга и визуальной айдентики','svc.4.l3':'Открытие компании и корпоративного счёта в США',
      'proc.kicker':'Как мы работаем','proc.title':'От первой встречи <em>к росту метрик.</em>',
      'proc.1.n':'Этап 01','proc.1.t':'Знакомство','proc.1.d':'30 минут, чтобы понять бизнес, запрос и где находится рычаг.','proc.1.m':'Старт',
      'proc.2.n':'Этап 02','proc.2.t':'Аудит и предложение','proc.2.d':'Диагностика текущего состояния — ищем слабые места и инструмент, которым будем пробивать потолок.','proc.2.m':'+ ясность',
      'proc.3.n':'Этап 03','proc.3.t':'Работа руками','proc.3.d':'Строю, аудирую или оперирую — с еженедельными созвонами и общим воркспейсом.','proc.3.m':'+ выручка',
      'proc.4.n':'Этап 04','proc.4.t':'Передача и рост','proc.4.d':'Документированный playbook, KPI и опциональный retainer для поддержки темпа.','proc.4.m':'Масштаб',
      'cta.title':'Есть продукт, канал или вопрос? <em>Давайте поговорим.</em>',
      'cta.sub':'Почти все проекты начинаются с 30-минутной консультации. Приносите задачу в сыром виде — сформулируем главное и уберём второстепенное.',
      'cta.book':'Записаться на 30 минут','cta.email':'Написать напрямую',
      'contact.kicker':'Контакты','contact.title':'Расскажите о вашем бизнесе.',
      'form.name':'Имя','form.email':'Email','form.company':'Компания / бренд','form.interest':'Интересует',
      'form.opt1':'Консультация 30 минут — 110 €','form.opt2':'Аудит бизнеса — 800 €','form.opt3':'Выход на рынок США — 1 600 €','form.opt4':'Полный запуск продукта — 2 990 €','form.opt5':'Fractional Head of E-commerce','form.opt6':'Другое',
      'form.msg':'Расскажите о проекте','form.msg.ph':'Этап, категория, текущие каналы, что мешает росту…',
      'form.submit':'Отправить','form.note':'Отвечаю в течение 1–2 рабочих дней.','form.sent':'✓ Получил — скоро напишу.','form.err':'Что-то пошло не так. Напишите мне напрямую на почту.',
      'foot.tag':'Консалтинг по e-commerce, маркетплейсам и росту для ранних брендов, идущих с 0 до $1M в год — с фокусом на рынок США.',
      'foot.work':'Работать со мной','foot.svc1':'Консультация 30 минут','foot.svc2':'Аудит бизнеса','foot.svc3':'Выход на рынок США','foot.svc4':'Полный запуск продукта',
      'foot.expertise':'Экспертиза','foot.e1':'Маркетплейсы','foot.e2':'Продукт и тренды','foot.e3':'Выход в США','foot.e4':'Брендинг и упаковка',
      'foot.contact':'Контакты','foot.linkedin':'LinkedIn','foot.instagram':'Telegram',
      'foot.role':'Консультант по e-commerce и маркетплейсам','foot.based':'Фокус на США · работаю по всему миру',
      'foot.privacy':'Privacy Policy','foot.legal':'Legal Notice'
    }
  };

  function apply(lang){
    const d = dict[lang] || dict.en;
    document.documentElement.lang = lang;

    // Plain text (preserve trailing .arr arrow span if present)
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const k = el.getAttribute('data-i18n');
      if (d[k] == null) return;
      const arr = el.querySelector(':scope > .arr');
      el.textContent = d[k];
      if (arr) { el.appendChild(document.createTextNode(' ')); el.appendChild(arr); }
    });

    // HTML replacement (for spans with colored words / <em>)
    document.querySelectorAll('[data-i18n-html]').forEach(el=>{
      const k = el.getAttribute('data-i18n-html');
      if (d[k] == null) return;
      el.innerHTML = d[k];
    });

    // Attribute replacement: data-i18n-attr="attrName|key"
    document.querySelectorAll('[data-i18n-attr]').forEach(el=>{
      const spec = el.getAttribute('data-i18n-attr');
      if (!spec) return;
      const [attr, k] = spec.split('|');
      if (d[k] != null) el.setAttribute(attr, d[k]);
    });

    document.querySelectorAll('.lang button').forEach(b=>{
      b.classList.toggle('is-active', b.dataset.lang === lang);
    });
    try { localStorage.setItem('lang', lang); } catch(e){}
  }

  const stored = (() => { try { return localStorage.getItem('lang'); } catch(e){ return null; } })();
  const initial = stored || (navigator.language||'en').slice(0,2).toLowerCase();
  apply(['en','es','ru'].includes(initial) ? initial : 'en');

  document.querySelectorAll('.lang button').forEach(b=>{
    b.addEventListener('click', ()=> apply(b.dataset.lang));
  });
})();
