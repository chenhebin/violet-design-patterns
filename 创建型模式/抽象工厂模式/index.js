/*
 * @Author: chb
 * @Date: 2025-03-06 16:06:31
 * @Description:
 */
// 假设我们正在开发一个在线图表应用程序，用户可以选择不同的图表类型进行展示，
// 例如折线图、柱状图和饼图。我们可以使用抽象工厂模式来创建不同类型的图表对象

class Chart {
  render() {
    throw new Error("抽象产品不可直接使用");
  }
}
// 具体产品 - 折线图
class LineChart extends Chart {
  render() {
    console.log("渲染折线图");
  }
}

// 具体产品 - 柱状图
class BarChart extends Chart {
  render() {
    console.log("渲染柱状图");
  }
}

// 具体产品 - 饼图
class PieChart extends Chart {
  render() {
    console.log("渲染饼图");
  }
}

// 抽象工厂
class ChartFactory {
  createChart() {
    throw new Error("抽象工厂方法不能直接调用");
  }
}

// 具体工厂 - 折线图工厂
class LineChartFactory extends ChartFactory {
  createChart() {
    return new LineChart();
  }
}

// 具体工厂 - 柱状图工厂
class BarChartFactory extends ChartFactory {
  createChart() {
    return new BarChart();
  }
}

// 具体工厂 - 饼图工厂
class PieChartFactory extends ChartFactory {
  createChart() {
    return new PieChart();
  }
}

// 客户端代码
const lineChartFactory = new LineChartFactory();
const barChartFactory = new BarChartFactory();
const pieChartFactory = new PieChartFactory();

const lineChart = lineChartFactory.createChart();
const barChart = barChartFactory.createChart();
const pieChart = pieChartFactory.createChart();

lineChart.render();    // 输出：渲染折线图
barChart.render();     // 输出：渲染柱状图
pieChart.render();     // 输出：渲染饼图
