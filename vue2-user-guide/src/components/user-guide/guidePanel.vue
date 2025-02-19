<template>
    <div class="guide-panel" hikcc_cover="opaque" :style="{ left, top, width, height, margin: `${offset}px` }">
        <div class="title">{{ item.title }}</div>
        <div v-if="item.descriptionHtml" class="content" v-html="item.descriptionHtml"></div>
        <div v-else class="content" v-html="item.description"></div>
        <div class="guide-footer">
            <div class="guide-footer-left">
                <el-button type="text" @click="clickHandle(BTN_TYPE.SKIP)">跳过（{{ currentStep }}/{{ steps }}）</el-button>
            </div>
            <div class="guide-footer-right">
                <el-button type="default" v-if="currentStep > 1 && currentStep <= steps" @click="clickHandle(BTN_TYPE.PRE)">上一步</el-button>
                <el-button type="info" v-if="currentStep < steps" @click="clickHandle(BTN_TYPE.NEXT)">下一步</el-button>
                <el-button type="info" v-if="currentStep === steps" @click="clickHandle(BTN_TYPE.OK)">我知道了</el-button>
            </div>
        </div>

        <svg
            class="jt-svg"
            :style="getSvgStyle()"
            :width="16"
            :height="16"
            :viewBox="`0 0 16 16`"
            xmlns="http://www.w3.org/2000/svg">
            <g>
                <path v-if="arrow === ARROW.LEFT || arrow === ARROW.LEFT_TOP" d="m0,8l16,-8l0,16z" fill="#fff" stroke="black" stroke-width="0" id="svg_left" opacity="1"/>
                <path v-else-if="arrow === ARROW.TOP" d="m0,16l16,0l-8,-16z" fill="#fff" stroke="black" stroke-width="0" id="svg_top" opacity="1"/>
                <path v-else-if="arrow === ARROW.BOTTOM || arrow === ARROW.MIDDLE_BOTTOM" d="m0,0l16,0l-8,16z" fill="#fff" stroke="black" stroke-width="0" id="svg_bottom" opacity="1"/>
                <path v-else-if="arrow === ARROW.RIGHT || arrow === ARROW.RIGHT_BOTTOM" d="m0,0l0,16l16,-8z" fill="#fff" stroke="black" stroke-width="0" id="svg_right" opacity="1"/>
            </g>
        </svg>
    </div>
</template>

<script>
export const BTN_TYPE = {
    SKIP: 'skip',
    PRE: 'pre',
    NEXT: 'next',
    OK: 'ok',
};
export const XY = {
    AUTO: 'auto',
    BOTTOM: 'bottom',
    RIGHT: 'right',
    LEFT: 'left',
    TOP: 'top',
};

export const ARROW = {
    LEFT: 'left',
    LEFT_TOP: 'leftTop',
    TOP: 'top',
    BOTTOM: 'bottom',
    MIDDLE_BOTTOM: 'middleBottom',
    MIDDLE: 'middle',
    RIGHT: 'right',
    RIGHT_BOTTOM: 'rightBottom',
};

export const OFFSET = 16;

export default {
    data() {
        return {
            ARROW,
            BTN_TYPE,
            offset: OFFSET,
        };
    },
    props: {
        item: {
            type: Object,
            default() {
                return {};
            }
        },
        currentStep: {
            type: Number,
            default: 0
        },
        steps: {
            type: Number,
            default: 0
        },
        xy: {
            type: String,
            default: XY.AUTO
        },
        arrow: {
            type: String,
            default: ARROW.LEFT
        },
        left: {
            type: String,
            default: '100px',
        },
        top: {
            type: String,
            default: '200px',
        },
        width: {
            type: String,
            default: '344px',
        },
        height: {
            type: String,
            default: '200px',
        },
    },
    methods: {
        getSvgStyle() {
            // const doc = document.getElementById(this.item.id);
            // const svgHalfWidth = (doc && doc.clientWidth || 0) / 2;
            const svgHalfWidth = 16/2;
            const w = Number(this.width.replace('px', ''));
            const h = Number(this.height.replace('px', ''));
            switch (this.arrow) {
                case ARROW.LEFT:
                    return {left: '-10px', top: '10px'};
                case ARROW.LEFT_TOP:
                    return {left: '-10px', top: `20px`};
                case ARROW.TOP:
                    return {left: `${w / 2 - svgHalfWidth}px`, top: '-10px'};
                case ARROW.BOTTOM:
                    return {bottom: '-10px', left: '10px'};
                case ARROW.MIDDLE_BOTTOM:
                    return {bottom: '-10px', left: `${w / 2 - svgHalfWidth}px`};
                case ARROW.MIDDLE:
                    return {left: `${w / 2 + this.offset - svgHalfWidth}px`, top: '-10px'};
                case ARROW.RIGHT:
                    return {right: '-10px', top: '10px'};
                case ARROW.RIGHT_BOTTOM:
                    return {right: '-10px', bottom: '20px'};
            }
        },
        clickHandle(type) {
            this.$emit('btn-click', type, this.item);
        }
    }
};
</script>

<style lang="scss" scoped>
.guide-panel {
    position: fixed;
    min-height: 150px;
    background-color: #fff;
    padding: 16px;

    .title {
        font-family: Microsoft YaHei UI;
        font-weight: 600;
        font-size: 20px;
        height: 30px;
        line-height: 30px;
    }

    .content {
        font-family: Microsoft YaHei UI;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        padding: 10px 0 60px 0;
    }

    .guide-footer {
        width: calc(100% - 32px);
        height: 50px;
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .jt-svg {
        position: absolute;
    }
}
</style>
