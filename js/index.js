let Main = {
    created: () => {
    },
    methods: {
        run() {
            let it = 1000;
            let dt = 2000;
            this.btnDisabled = true;
            this.itemList.filter((val, index, arr) => {
                setTimeout(() => {
                    this.itemList[index]["running"] = true;
                    setTimeout(() => {
                        this.itemList[index]["running"] = false;
                        document.getElementsByClassName(Math.round(Math.random() * 10) ? "success" : "fail")[index].classList.remove("hidden");
                        if (index === this.itemList.length - 1) {
                            this.btnDisabled = false;
                        }
                    }, dt);
                }, it);
                it += 3000;
                return false
            });
        },
        clear() {
            this.itemList = [];
        },
        handleCheckChange(data, checked) {
            if (!data.hasOwnProperty("children")) {
                if (checked) {
                    this.itemList.push({"num": 1, "data": data["label"], "key": data["key"], "running": false});
                } else {
                    this.itemList = this.itemList.filter((val, index, arr) => {
                        if (val.key !== data["key"]) {
                            return true;
                        }
                        return false
                    });
                }
                this.totalTask = this.itemList.length;
            }
        }
    },
    data() {
        return {
            props: {
                children: 'children',
                label: 'label',
            },
            renderAfterExpand: false,
            btnDisabled: false,
            loading: true,
            itemList: [],
            totalTask: 0,
            treeData: [
                {
                    label: 'Soundbar',
                    disabled: true,
                    children: [
                        {
                            label: 'HDMI',
                            children: [
                                {
                                    label: 'Test1',
                                    key: 1,
                                },
                                {
                                    label: 'Test2',
                                    key: 2,
                                },
                                {
                                    label: 'Test3',
                                    key: 3,
                                },
                            ],
                        },
                        {
                            label: 'BT',
                            children: [
                                {
                                    label: 'Test4',
                                    key: 4,
                                },
                            ],
                        }
                    ],
                },
                {
                    label: 'Headset',
                    disabled: true,
                    children: [
                        {
                            label: 'BT',
                            children: [
                                {
                                    label: 'Test5',
                                    key: 5,
                                },
                            ],
                        },
                    ],
                }
            ]
        }
    }
}
const app = Vue.createApp(Main);
app.use(ElementPlus);
app.mount("#app");