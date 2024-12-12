import { Tabs, Tab } from "@nextui-org/tabs";

const TabComponent = () => {
    return (
    <div className="w-full">
        <Tabs variant={"light"} color="primary">
            <Tab title={<h2 className="text-text">About Me</h2>}>
                <div className="bg-primary w-full h-[250px] rounded-lg flex flex-col items-center p-10">
                    <h1 className="text-4xl font-semibold">Hello, I'm Owen</h1>
                    <h2 className="text-center p-5 font-semibold">
                        I am a software developer based in Manchester, UK.
                        I have used a variety of front-end technologies, specialising in React, and plenty of back-end and database technology too,
                        such as the AWS suite, SQL, and python.
                    </h2>
                </div>
            </Tab>
            <Tab title={<h2 className="text-text">My Portfolio</h2>}>
                <div className="bg-primary w-full h-[1000px] rounded-lg">
                    
                </div></Tab>
            <Tab title={<h2 className="text-text">Call Me</h2>}>
                <div className="bg-primary w-full h-[500px] rounded-lg">
                    
                </div>
            </Tab>
        </Tabs>
    </div>
    )
}

export default TabComponent;