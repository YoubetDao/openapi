// example-usage.ts
import {
  Configuration,
  TaskApi,
  PeriodControllerGetPeriodsRewardGrantedEnum,
  TaskControllerGetCompletedTasksRewardGrantedEnum,
} from '../client';

// 创建配置对象
const configuration = new Configuration({
  basePath: 'http://localhost:5060',
});

// 使用自定义的axios实例创建TaskApi对象
const taskApi = new TaskApi(configuration, '');

// 示例函数：获取所有任务
async function getAllTasks() {
  try {
    const response = await taskApi.taskControllerGetTasks(
      '',
      '',
      '',
      '',
      PeriodControllerGetPeriodsRewardGrantedEnum.All,
      TaskControllerGetCompletedTasksRewardGrantedEnum.All,
    );
    return response.data;
  } catch (error) {
    console.error('获取任务失败:', error);
    throw error;
  }
}
async function runExample() {
  try {
    const allTasks = await getAllTasks();
    console.log(allTasks);
  } catch (error) {
    console.error('运行示例时发生错误:', error);
  }
}

// 执行示例
runExample();
