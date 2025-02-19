<template>
    <div class="user-guide-group" hikcc_cover="opaque">
        <UserGuide
            v-if="visible"
            :key="currentStep"
            :currentStep="currentStep"
            :steps="steps"
            :item="current"
            @btn-click="btnClickHandle"
        />
    </div>
</template>

<script>
import UserGuide from '@/components/user-guide/index';
import {BTN_TYPE} from './guidePanel';

export default {
    components: {UserGuide},
    data() {
        return {
            visible: false,
            currentStep: 0,
            steps: 0,
            currentIndex: 0,
            current: {},
        };
    },
    props: {
        list: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    mounted() {
        this.initCurrent(0);
    },
    methods: {
        open() {
            this.visible = true;
        },
        close() {
            this.visible = false;
        },
        // 初始化当前项
        initCurrent(index) {
            this.currentIndex = index;
            this.current = this.list[this.currentIndex];
            this.steps = this.list.length;
            this.currentStep = index + 1;
        },
        // 按钮点击
        btnClickHandle(type, item) {
            item && item.btnClick && item.btnClick(type, item);
            switch (type) {
                case BTN_TYPE.NEXT:
                    this.initCurrent(this.currentIndex + 1);
                    break;
                case BTN_TYPE.OK:
                    this.close();
                    this.initCurrent(0);
                    break;
                case BTN_TYPE.PRE:
                    this.initCurrent(this.currentIndex - 1);
                    break;
                case BTN_TYPE.SKIP:
                    this.close();
                    break;
            }
            this.$emit('btn-click', type, item);
        }
    }
};
</script>
