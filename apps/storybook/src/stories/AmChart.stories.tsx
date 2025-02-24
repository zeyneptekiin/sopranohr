import type { Meta, StoryObj } from "@storybook/react";
import AmChart from "../stories/AmChart";

const meta: Meta<typeof AmChart> = {
    title: "Components/AmChartDragSlice",
    component: AmChart,
};

export default meta;

type Story = StoryObj<typeof AmChart>;

export const Default: Story = {};
