import { Tabs, Tab } from "@nextui-org/tabs";

const TabComponent = () => {
    return (
    <div className="w-full">
        <Tabs variant={"light"} color="primary">
            <Tab title={<h2 className="text-text">About Me</h2>}>
                <div className="bg-primary w-full rounded-lg">
                    hello
                </div>
            </Tab>
            <Tab title={<h2 className="text-text">My Portfolio</h2>}></Tab>
            <Tab title={<h2 className="text-text">Call Me</h2>}></Tab>
        </Tabs>
    </div>
    )
}

export default TabComponent;