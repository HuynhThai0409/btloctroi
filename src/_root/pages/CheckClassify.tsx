import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"

const CheckClassify = () => {
  return (
    <div>
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel>One</ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel>Two</ResizablePanel>
        </ResizablePanelGroup>
    </div>
  )
}

export default CheckClassify