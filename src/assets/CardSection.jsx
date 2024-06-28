import Card from "../Components/Card"

function CardSection() {
  return (
    <div className="sm:flex mt-28">
        <div className="border-r-4">
            <Card title="Xbox" details="Xbox is a video gaming brand that consists of five home video game consoles, as well as applications (games), streaming service Xbox Cloud Gaming" image="https://images.unsplash.com/photo-1621259181233-aa03cf592ea7?q=80&w=1458&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <Card title="PSP" details="The PlayStation Portable (PSP) is a handheld game console developed and marketed by Sony Computer Entertainment." image="https://images.unsplash.com/photo-1635948389599-6a94c2450326?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <Card title="PS3" details="(PlayStation 3) A video game console from Sony that was introduced in late 2006. Containing a high-definition Blu-ray drive that also reads DVDs, CDs and SACD discs, the PS3 uses the Cell processor" image="https://images.unsplash.com/photo-1661276503896-aa8b017f8914?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </div>
        <div>
            <Card title="PS5" details="Powered by an eight-core AMD Zen 2 CPU and custom AMD Radeon GPU, the PS5 is offered in two models: with and without a 4K Blu-ray drive. Supporting a 120Hz video refresh, the PS5 is considerably more powerful than the PS4 and PS4 Pro." image="https://images.unsplash.com/photo-1606171687198-55586a6cdf4f?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <Card title="PS4" details="The PlayStation 4 places an increased emphasis on social interaction and integration with other devices and services, including the ability to play games off-console on PlayStation Vita and other supported devices" image="https://images.unsplash.com/photo-1580327332925-a10e6cb11baa?q=80&w=1414&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <Card title="PS2" details="The PlayStation 2 (PS2) is a home video game console developed and marketed by Sony Computer Entertainment. It was first released in Japan on 4 March 2000, in North America on 26 October 2000, in Europe on 24 November 2000, and in Australia on 30 November 2000. It is the successor to the PlayStation" image="https://images.unsplash.com/photo-1593229874334-90d965f27c42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBzfGVufDB8fDB8fHww"/>
        
        </div>
    </div>
  )
}

export default CardSection