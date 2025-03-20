// example-usage.ts
import { Configuration, TasksApi } from '../client';

// 创建配置对象
const configuration = new Configuration({
  basePath: 'http://localhost:5060',
});

// 使用自定义的axios实例创建TaskApi对象
const taskApi = new TasksApi(configuration, '');

// 示例函数：获取所有任务
async function getAllTasks() {
  try {
    const response = await taskApi.taskControllerGetTasks(
      'youbetdao',
      '67862316d322f7e0a8f60ccd',
      'wfnuser',
      '',
      '',
    );
    console.log('任务列表:', response.data);
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
