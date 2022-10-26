<template>
  <div class="flex-col">
    <div class="flex justify-between max-w-3xl pt-8">
      <div id="heading" class="flex">
        <h1>
          <span class="text-lg font-bold">Today</span>
        </h1>
        <p class="text-xs pt-2 pl-1 text-gray-500">{{ getToday }}</p>
      </div>
      <div id="buttons">
        <div>
          <ul class="flex">
            <li class="px-2">
              <button class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M15 14.5a2 2 0 011.936 1.498L19.5 16a.5.5 0 010 1l-2.563.001a2.001 2.001 0 01-3.874 0L4.5 17a.5.5 0 010-1l8.564-.002A2 2 0 0115 14.5zm-.982 1.81l.005-.025-.005.026-.003.014-.004.025-.007.061A.897.897 0 0014 16.5l.008.125.007.047-.001.002.003.014.006.024h-.001l.004.018.016.058.007.021.004.013.009.026.013.033.012.027-.011-.026.019.043-.008-.017.029.06-.018-.037.048.09a1 1 0 001.784-.155l.015-.039.006-.018-.015.039.022-.06-.001-.001.016-.057.004-.018.005-.024.001-.006v-.001l.005-.033.008-.06A.877.877 0 0016 16.5l-.008-.124-.007-.051-.001-.001-.003-.014-.01-.047-.004-.016-.007-.024-.01-.034-.004-.012-.01-.03-.006-.013-.007-.017-.01-.026a.998.998 0 00-1.843.043l-.014.034-.007.022-.014.047-.002.009v.001l-.005.016-.01.047zM9 9.5a2 2 0 011.936 1.498L19.5 11a.5.5 0 010 1l-8.563.001a2.001 2.001 0 01-3.874 0L4.5 12a.5.5 0 010-1l2.564-.002A2 2 0 019 9.5zm0 1a.998.998 0 00-.93.634l-.014.034-.007.022-.014.047-.002.009v.001l-.005.016-.01.047.005-.025-.005.026-.003.014-.004.025-.007.061C8 11.441 8 11.471 8 11.5l.008.125.007.047-.001.002.003.014.006.024h-.001l.004.018.016.058.007.021.004.013.009.026.013.033.012.027-.011-.026.019.043-.008-.017.029.06-.018-.037.048.09a1 1 0 001.784-.155l.015-.039.006-.018-.015.039.022-.06-.001-.001.016-.057.004-.018.005-.024.001-.006v-.001l.005-.033.008-.06A.877.877 0 0010 11.5l-.008-.124-.007-.051-.001-.001-.003-.014-.01-.047-.004-.016-.007-.024-.01-.034-.004-.012-.01-.03-.006-.013-.007-.017-.01-.026A1.002 1.002 0 009 10.5zm6-6a2 2 0 011.936 1.498L19.5 6a.5.5 0 010 1l-2.563.001a2.001 2.001 0 01-3.874 0L4.5 7a.5.5 0 010-1l8.564-.002A2 2 0 0115 4.5zm0 1a.998.998 0 00-.93.634l-.014.034-.007.022-.014.047-.002.009v.001l-.005.016-.01.047.005-.025-.005.026-.003.014-.004.025-.007.061C14 6.441 14 6.471 14 6.5l.008.125.007.047-.001.002.003.014.006.024h-.001l.004.018.016.058.007.021.004.013.009.026.013.033.012.027-.011-.026.019.043-.008-.017.029.06-.018-.037.048.09a1 1 0 001.784-.155l.015-.039.006-.018-.015.039.022-.06-.001-.001.016-.057.004-.018.005-.024.001-.006v-.001l.005-.033.008-.06C16 6.557 16 6.528 16 6.5l-.008-.124-.007-.051-.001-.001-.003-.014-.01-.047-.004-.016-.007-.024-.01-.034-.004-.012-.01-.03-.006-.013-.007-.017-.01-.026A1.002 1.002 0 0015 5.5z"
                    fill="currentColor"
                    fill-rule="nonzero"
                  ></path>
                </svg>
                <span>View</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex flex-col space-y-4 justify-between max-w-3xl">
      <div class="border">
        <input
          type="text"
          v-model="task"
          class="min-w-full pl-[2rem] border-slate-700 border focus:ring-0"
          placeholder="Enter a New task title"
        />
        <input
          type="text"
          v-model="taskdescription"
          class="min-w-full pl-[2rem] h-24 border-slate-700 border-none focus:ring-0"
          placeholder="Enter task's description(otional)"
        />
      </div>
      <div>
        <div id="addresetbtn" class="flex space-x-1 justify-end">
          <button
            @click="CancelTask"
            class="bg-cnclBtnColor hover:bg-cnclBtnHoverColor text-gray font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
          <button
            v-if="!update"
            @click="submitTask"
            class="bg-btnColor hover:bg-btnhovorColor text-white font-bold py-2 px-4 rounded"
          >
            Add task
          </button>
          <button
            v-if="update"
            @click="submitTask"
            class="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
          >
            Update
          </button>
        </div>
      </div>
    </div>
    <div v-show="tasks.length != 0">
      <div class="pt-3 max-w-3xl overflow-x'">
        <table class="table-auto overflow-scroll w-full">
          <thead>
            <tr>
              <!-- <th class="p-3 text-sm font-semibold tracking-wide text-left">
              Task
            </th>
            <th class="p-3 text-sm font-semibold tracking-wide text-left">
              Status
            </th>
            <th class="p-3 text-sm font-semibold tracking-wide text-left">
              Edit
            </th>
            <th class="p-3 text-sm font-semibold tracking-wide text-left">
              Delete
            </th> -->
              <th
                v-for="(col, index) in columns"
                :key="index"
                class="border-2 p-2 cursor-pointer"
                v-on:click="sortRecords(index)"
              >
                {{ col }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(task, index) in filteredTasks"
              class="border-2 text-center p-2"
              :key="index"
            >
              <td @mouseover="showDesc = true" @mouseleave="showDesc = false">
                <span
                  class="block bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                  :class="{ finished: task.status === 'Finished' }"
                  >{{ task.name }}
                  <span
                    v-show="showDesc && task.description.length != 0"
                    class="block"
                    >{{ task.description }}</span
                  >
                </span>
              </td>
              <td
                class="pointer"
                :class="{
                  'bg-red-500': task.status === 'To-do',
                  'bg-orange-500': task.status === 'In-progress',
                  'bg-green-500': task.status === 'Finished',
                }"
                style="width: 120px"
              >
                <span @click="changeStatus(index)">{{ task.status }}</span>
              </td>
              <td>
                <div
                  class="text-center hover:bg-slate-200 transition ease-linear duration-150"
                  @click="editTask(task)"
                >
                  <span
                    class="fa fa-pen hover:text-yellow-400 hover:h-5 hover:pt-1 hover:transition ease-in duration-500"
                  ></span>
                </div>
              </td>
              <td>
                <div
                  class="text-center hover:bg-slate-200 transition ease-linear duration-150"
                  @click="deleteTask(task)"
                >
                  <span
                    class="fa fa-trash hover:text-red-400 hover:h-5 hover:pt-1 hover:transition ease-in duration-500"
                  ></span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <Pagination
            v-bind:tasks="tasks"
            v-bind:currentPage="currentPage"
            v-bind:pageSize="pageSize"
            v-on:page:update="updatePageNumber"
          ></Pagination>
        </div>
      </div>
    </div>

    <div v-show="tasks.length == 0" class="max-w-3xl grid justify-items-center">
      <div>
        <div class="w-56">
          <svg
            viewBox="0 0 880 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.28"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M298.028 170.956v70.056c6.231-4.913 12.662-9.506 19.332-13.74v66.741h-69.378l7.27-9.545a241.744 241.744 0 0134.788-36.866v-76.646h7.988zM192.225 404.65h41.538v-30.675h-41.538v30.675zm0 26.68h41.538v-18.692h-41.538v18.692zm596.437-2.396l-57.035 18.572v-37.185l57.035 18.573v.04zm-596.437 29.077h41.538v-18.692h-41.538v18.692zm0 26.68h41.538v-18.692h-41.538v18.692zm0 26.681h41.538V492.68h-41.538v18.692zm347.965-10.904l-68.179 18.573v-37.185l68.179 18.572v.04zm-347.965 37.584h41.538V519.36h-41.538v18.692zm0 26.681h41.538v-18.692h-41.538v18.692zm-75.608.959c-7.549-.839-15.378-1.319-23.406-1.438l36.986-190.199h23.685l-37.265 191.637zM77.714 366.107v7.948h44.375L85.103 564.254c-23.565.359-49.127 3.954-76.606 11.862 0 0-.68-2.596-1.917-7.149-20.85-77.965 9.825-157.647 71.134-202.82v-.04zm106.523 7.948v209.091a243.38 243.38 0 00-59.672-16.496l37.465-192.635h22.207v.04zm49.526 236.81c-12.142-8.628-25.961-16.975-41.538-24.165v-13.979h41.538v38.144zm119.184 60.71a120.355 120.355 0 00-23.925-1.398l-57.594-296.122h23.685l57.874 297.52h-.04zm-31.953-.839a149.139 149.139 0 00-23.285 4.314s-18.732-29.676-55.957-58.314V374.015h21.528l57.714 296.681v.04zm4.354-448.297a242.337 242.337 0 0194.141-31.713c65.183-7.788 130.726 11.104 181.731 52.403 17.893 14.578 37.504 28.597 59.472 41.778a184.606 184.606 0 0048.089 20.45c.279.159.599.239.918.319 86.073 23.046 151.376 93.342 167.952 180.853-46.172 12.98-72.453 37.943-96.218 76.966-17.254-3.156-33.75-4.194-50.046-4.554V407.126c0-2.796-1.797-5.032-3.994-5.032s-3.994 2.276-3.994 5.032v151.895c-27.999.759-62.388 5.792-94.5 21.808V346.096a4.007 4.007 0 00-3.994-3.994 4.006 4.006 0 00-3.994 3.994v238.967c-21.688 12.222-41.938 29.876-57.995 55.038-13.58-9.066-57.115-12.861-91.185 5.752V477.262c0-2.037-1.797-3.674-3.994-3.674s-3.994 1.637-3.994 3.674v172.305c-18.932 9.546-38.143 24.963-55.078 49.287 0 0-16.176-18.133-47.25-25.642l-58.194-299.197h54.08v-80.002h-31.953V222.36v.079z"
              fill="currentColor"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M497.094 392.428l123.816 38.703v-77.406l-123.816 38.703z"
              fill="currentColor"
            ></path>
            <path
              opacity="0.28"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M433.787 717.147c31.633-52.322 76.207-59.511 103.047-57.914 2.197.12 4.074-1.558 4.234-3.754.12-2.197-1.558-4.074-3.754-4.234-28.718-1.678-76.527 5.791-110.357 61.789-1.158 1.877-.519 4.353 1.358 5.471 1.877 1.159 4.354.52 5.472-1.358z"
              fill="currentColor"
            ></path>
            <path
              opacity="0.28"
              d="M122.288 170.916H114.3v123.058h7.988V170.916z"
              fill="currentColor"
            ></path>
            <path
              opacity="0.53"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M149.608 293.974H317.36V170.956H149.608v123.058-.04zm4.274 80.001h-23.685L86.062 600.96a104.175 104.175 0 0122.407 6.51l45.413-233.495zM141.62 170.956v123.058H77.715v80.001h44.374L78.154 599.881c-24.643-2.476-43.056 3.954-43.056 3.954-2.077.719-3.195 2.996-2.477 5.073.72 2.077 2.996 3.195 5.073 2.476 0 0 73.691-25.362 119.903 51.085 1.158 1.877 3.594 2.476 5.471 1.357 1.878-1.158 2.477-3.594 1.358-5.471-14.538-24.045-31.593-38.663-48.488-47.37l46.092-236.97h101.25l66.142 339.977c.44 2.157 2.517 3.595 4.673 3.156 2.157-.44 3.595-2.517 3.156-4.673l-65.823-338.46h23.685l66.142 339.977c.44 2.157 2.516 3.595 4.673 3.156 2.157-.44 3.595-2.517 3.156-4.673l-65.823-338.46h54.08v-80.001h-31.953V170.956h38.903c1.677 0 3.155-1.079 3.634-2.676a3.789 3.789 0 00-1.438-4.274c-30.834-21.608-123.816-86.792-146.143-102.448-2.916-2.037-6.83-2.117-9.786-.12-23.205 15.417-121.62 80.8-154.212 102.488a3.83 3.83 0 00-1.557 4.274 3.824 3.824 0 003.674 2.716h83.197l-.04.04z"
              fill="currentColor"
            ></path>
            <path
              opacity="0.28"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M357.3 309.79H78.033v3.994H357.3v-3.994zm-127.811 19.971H357.3v-3.994H229.489v3.994zm-151.456 0h75.569v-3.994H78.033v3.994zm97.696 0h37.784v-3.994h-37.784v3.994zm37.784 15.976H357.3v-3.994H213.513v3.994zm-95.539 0h75.569v-3.994h-75.569v3.994zm-39.94 0h27.639v-3.994h-27.64v3.994zm231.337 11.982H77.714v3.994h231.657v-3.994zm19.971 3.994H357.3v-3.994h-27.958v3.994zM321.114 747.583s-47.609-83.676-176.019-66.382c-2.197.28-3.715 2.317-3.435 4.473.279 2.197 2.316 3.715 4.473 3.435 122.379-16.455 168.031 62.468 168.031 62.468 1.079 1.917 3.555 2.556 5.432 1.478 1.918-1.079 2.557-3.555 1.478-5.472h.04z"
              fill="currentColor"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M221.661 258.027c5.392-8.627 14.818-13.9 25.003-13.9a29.44 29.44 0 0125.003 13.9l22.367 35.947h-94.74l22.367-35.947zM229.489 218.805s-41.538.639-55.038 8.428c-9.666 5.591-12.981 17.973-7.389 27.639s17.973 12.981 27.639 7.389c13.46-7.789 34.788-43.456 34.788-43.456z"
              fill="currentColor"
            ></path>
            <path
              opacity="0.53"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M251.058 216.129l-.719 2.876c-.519 2.156.759 4.313 2.916 4.832 2.157.52 4.314-.758 4.833-2.915l.719-2.876c.519-2.157-.759-4.314-2.916-4.833-2.157-.519-4.313.759-4.833 2.916zm9.426 10.984c-3.475 3.634-8.387 5.911-13.779 5.911-5.991 0-11.304-2.756-14.738-7.11l26.68-26.68c4.354 3.435 7.11 8.747 7.11 14.738 0 2.197-.36 4.354-1.079 6.311l4.553 2.596c1.918 1.078 2.597 3.555 1.478 5.472-1.078 1.917-3.555 2.596-5.432 1.478l-4.753-2.716h-.04z"
              fill="currentColor"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M231.926 225.914c-2.716-3.235-4.314-7.389-4.314-11.942 0-10.504 8.548-19.052 19.052-19.052 4.554 0 8.707 1.598 11.943 4.314l-26.681 26.68z"
              fill="currentColor"
            ></path>
            <path
              opacity="0.28"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M215.51 60v42.098h3.994v-41.02A8.784 8.784 0 00215.51 60zm-75.888 48.568l-3.994 2.636v10.864h3.994v-13.5zm91.865-24.244v37.744h3.994V84.284h-3.994v.04zm47.929 18.692v27.08h3.994v-24.284l-3.994-2.796zm15.976 11.184v35.827h3.994v-33.031l-3.994-2.796zM107.67 129.817l-3.994 2.636v17.574h3.994v-20.25.04zm47.929-31.833l-3.994 2.676v69.337h3.994V97.944v.04zm15.976-10.624l-3.994 2.676v79.961h3.994V87.32v.04zm15.977-10.625l-3.995 2.636v90.626h3.995V76.735zm-51.924 65.344v27.958h3.994v-27.958h-3.994zm226.745 19.091v9.786h-3.994v-12.582l3.994 2.796zm-15.977-11.183v21.009h-3.994v-23.805l3.994 2.796zm-15.976-11.184v32.193h-3.994v-34.988l3.994 2.795zm-15.058-10.584v42.777h-3.994v-45.573l3.994 2.796zm-19.97 42.777h3.994v-4.953h-3.994v4.953zm-15.976 0h3.994v-20.929h-3.994v20.929zm-11.983-76.367v76.327h-3.994V91.793l3.994 2.796v.04zm-15.976-11.184v87.511h-3.994V80.61l3.994 2.795v.04zm-19.97 87.551h3.994v-32.912h-3.994v32.912zm-15.977 0h3.994v-48.928h-3.994v48.928zm-11.982 0h-3.994V68.747l3.994-2.636v104.885zm-79.882 0h-3.994v-49.167l3.994-2.637v51.804zm-19.97 0h3.994v-4.953h-3.994v4.953zm-15.977 0h3.994v-20.929H87.7v20.929zm-11.982 0h-3.994v-17.255l3.994-2.636v19.931-.04z"
              fill="currentColor"
            ></path>
            <path
              opacity="0.53"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M540.23 500.388l-68.219 18.573v-37.145l68.219 18.572zM788.662 428.894l-57.035 18.573v-37.145l57.035 18.572zM536.236 758.247c-2.077 5.751-2.876 11.063-2.596 15.497.439 6.83 5.512 9.785 9.106 7.669 2.597-1.518 3.435-5.273 1.718-10.864-1.398-4.554-4.274-8.708-8.188-12.262l-.04-.04zm151.496-53.162c-22.008-8.547-52.363-13.979-89.308-4.713-34.948 8.787-55.318 27.839-65.263 45.813-4.793-2.876-10.225-5.153-16.137-6.79-25.282-6.95-58.553-1.318-80.401 27.519-1.318 1.757-.998 4.274.759 5.592 1.758 1.318 4.274.998 5.592-.759 19.531-25.802 49.327-30.835 71.934-24.644 5.431 1.478 10.464 3.635 14.818 6.271-3.196 7.789-4.434 15.098-4.034 20.849.359 5.512 2.516 9.466 5.272 12.022 4.593 4.274 11.063 4.793 15.856 1.997 4.873-2.875 8.588-9.506 5.273-20.13-2.037-6.55-6.391-12.501-12.422-17.454 8.827-16.496 27.879-34.349 60.75-42.577 34.309-8.587 62.627-3.834 83.277 3.994a312.13 312.13 0 00-11.823 23.405c-.918 1.998 0 4.394 1.997 5.273 1.997.918 4.394 0 5.273-1.997 3.794-8.388 7.788-16.256 11.982-23.645 9.745 4.353 17.374 9.186 22.646 13.02a4.052 4.052 0 005.592-.878 4.051 4.051 0 00-.879-5.592c-5.432-3.954-13.26-8.907-23.245-13.46 50.645-82.957 126.253-100.811 174.781-102.808 2.197-.08 3.914-1.957 3.834-4.154-.079-2.197-1.957-3.914-4.153-3.834-50.526 2.037-129.449 20.649-181.891 107.641l-.08.039z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <div class="text-center">
        <h1>All clear Looks like everything's organized in the right place.</h1>
        <div>Get a clear view of the day ahead</div>
        <div>All your tasks that are due today will show up here.</div>
        <div class="flex-row items-center">
          <button
            class="bg-btnColor hover:bg-btnhovorColor text-white font-bold py-2 px-4 rounded"
          >
            Add task
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from "../main";
import serializeMixin from "../mixins/serializeMixin";
// import deleteMixin from "../mixins/deleteMixin";
// import tableMixin from "../mixins/tableMixin";
import Pagination from "./Pagination.vue";
export default {
  name: "TodoApp",
  mixins: [serializeMixin],
  data() {
    return {
      today: "",
      task: "",
      update: false,
      term: "",
      status: "",
      taskdescription: "",
      editedTask: null,
      availableStatus: ["To-do", "In-progress", "Finished"],
      tasks: [
        {
          name: "something",
          description: "some description",
          status: "finished",
        },
      ],
      columns: ["Task", "Status", "Edit", "Delete"],
      sortIndex: null,
      sortDirectioin: null,
      currentPage: 0,
      pageSize: 5,
      visibleTodos: [],
      temp: [],
      nextId: 0,
      showDesc: false,
    };
  },
  props: {
    someId: {
      type: Number,
      required: true,
    },
  },
  components: {
    Pagination,
  },
  beforeMount() {
    this.updateVisibleTodos();
  },
  methods: {
    updatePageNumber(num) {
      this.currentPage = num;
    },
    updatePage(pageNumber) {
      this.currentPage = pageNumber;
      this.updateVisibleTodos();
    },
    updateVisibleTodos(db = this.tasks) {
      this.visibleTodos = db.slice(
        this.pageSize * this.currentPage,
        this.currentPage * this.pageSize + this.pageSize
      );
      if (this.visibleTodos.length == 0 && this.currentPage > 0) {
        this.updatePage(this.currentPage - 1);
      }
      return this.visibleTodos;
    },
    submitTask() {
      this.update = false;

      if (this.task.length == 0) {
        alert("Empty task title cannot be submitted");
        return;
      }
      if (this.editedTask == null) {
        this.nextId++;
        this.tasks.push({
          id: this.nextId,
          name: this.task,
          description: this.taskdescription,
          status: "To-do",
        });
      } else {
        this.tasks[this.editedTask.id].name = this.task;
        this.tasks[this.editedTask.id].description = this.taskdescription;
        this.tasks[this.editedTask.id].status = this.editedTask.status;
        this.editedTask = null;
      }
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
      bus.$emit("count", this.tasks.length);
      this.updateVisibleTodos();
      this.task = "";
      this.taskdescription = "";
    },
    CancelTask() {
      this.update = false;
      this.task = "";
      this.taskdescription = "";
      this.editedTask = null;
    },
    editTask(editT) {
      this.update = true;
      this.task = editT.name;
      this.taskdescription = editT.description;
      this.status = editT.status;
      this.editedTask = editT;

      const idx = this.visibleTodos.indexOf(editT);
      this.visibleTodos.splice(idx, 1);
    },
    changeStatus(index) {
      let newIndex = this.availableStatus.indexOf(
        this.visibleTodos[index].status
      );
      this.visibleTodos[index].status =
        this.availableStatus[(newIndex + 1) % 3];
      localStorage.clear();
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    randomfunc(data) {
      console.log(data);
    },
    deleteTask(data) {
      this.nextId--;
      const srch = this.tasks.indexOf(data);
      if (srch == -1) {
        console.log("something is wrong");
        return;
      }
      this.tasks.splice(srch, 1);
      this.visibleTodos.splice(this.visibleTodos.indexOf(data), 1);
      localStorage.clear();
      this.serialize();
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
      bus.$emit("count", this.tasks.length);
      this.updateVisibleTodos();
    },
    sortRecords(idx) {
      if (idx > 1) return;
      if (this.sortIndex == idx) {
        switch (this.sortDirectioin) {
          case null:
            this.sortDirectioin = "asc";
            break;
          case "asc":
            this.sortDirectioin = "desc";
            break;
          case "desc":
            this.sortDirectioin = null;
            break;
        }
      } else {
        this.sortDirectioin = "asc";
      }
      this.sortIndex = idx;

      if (this.sortDirectioin == null) {
        this.tasks = JSON.parse(localStorage.getItem("tasks"));
        return;
      }

      let sortTerm = "";
      if (idx == 0) {
        sortTerm = "name";
      } else if (idx == 1) {
        sortTerm = "status";
      }
      this.tasks = this.tasks.sort((rowA, rowB) => {
        if (this.sortDirectioin == "asc") {
          return rowA[sortTerm].localeCompare(rowB[sortTerm]);
        } else if (this.sortDirectioin == "desc") {
          return rowB[sortTerm].localeCompare(rowA[sortTerm]);
        }
      });
    },
  },
  computed: {
    filteredTasks() {
      const test = this.tasks.filter((task) => {
        return (
          task.name.match(this.term) ||
          task.description.match(this.term) ||
          task.status.match(this.term)
        );
      });
      bus.$emit("searchingPagination", test.length);
      return this.updateVisibleTodos(test);
    },
    getToday() {
      var dob = new Date();
      var dobArr = dob.toDateString().split(" ");
      var dobFormat = dobArr[0] + " " + dobArr[1] + " " + dobArr[2];
      return dobFormat;
    },
  },
  created() {
    this.tasks = JSON.parse(localStorage.getItem("tasks"));
    this.nextId = this.tasks.length - 1;
    bus.$on("search", (data) => {
      console.log("search called");
      this.term = data;
    });
    bus.$on("delete", (data) => {
      console.log("delete called", data);
      this.deleteTask(data);
    });
  },
};
</script>

<style>
.pointer {
  cursor: pointer;
}
.finished {
  text-decoration: line-through;
}
</style>
