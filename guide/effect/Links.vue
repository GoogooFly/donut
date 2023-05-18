<template>
    <NGrid cols="2 s:3 m:4 l:4 xl:4 2xl:6" x-gap="10" y-gap="10" responsive="screen">
        <NGridItem v-for="({ index, href, title, desiction, icon }) in data" :key="index">
            <div class="li">
                <div class="container">
                    <a :href="href" target="_blank" class="header">
                        <NImage :width="32" :height="32" class="logo" v-lazyload="icon" preview-disabled />
                        <NEllipsis :line-clamp="1">
                            <h4>{{ title }}</h4>
                        </NEllipsis>
                    </a>
                    <NEllipsis class="desiction" :line-clamp="1" expand-trigger="click" :tooltip="false"> {{ desiction }}
                    </NEllipsis>
                </div>
                <div class="tools">
                    <NPopover trigger="hover" placement="top-start">
                        <template #trigger>
                            <div class="icon" @click="onCopy(href)">
                                <Copy theme="outline" />
                            </div>
                        </template>
                        <span>{{ href }}</span>
                    </NPopover>
                    <NPopover trigger="hover" placement="top-start">
                        <template #trigger>
                            <div class="icon" @click="onCopy(href)">
                                <Instruction theme="outline" />
                            </div>
                        </template>
                        <span>打开使用文档</span>
                    </NPopover>
                </div>
            </div>
        </NGridItem>
    </NGrid>
</template>

<script setup lang="ts">
import { NGrid, NGridItem, NImage, NEllipsis, NPopover, useMessage } from 'naive-ui';
import { Copy, Instruction } from '@icon-park/vue-next';
import type { TState } from './state/state';
import useClipboard from 'vue-clipboard3';

const { toClipboard } = useClipboard();
const message = useMessage();
withDefaults(defineProps<{
    data: TState
}>(), {});

function onCopy(href: string) {
    toClipboard(href);
    message.success('复制成功！');
}
</script>

<style lang="less" scoped>
.li {
    min-width: 100%;
    min-height: 75px;
    padding: 8px 13px 8px 15px;
    background-color: var(--vp-c-bg-soft);
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: transform .3s ease, box-shadow .3s ease;
    display: flex;
    justify-content: space-between;


    &:hover {
        transform: translateY(-7px);
        box-shadow: 0px 0px 6px rgba(0, 0, 0, .12);
    }

    .logo {
        width: 32px;
        height: 32px;
        min-width: 32px;
        max-height: 32px;
        border-radius: 4px;
        margin-right: 12px;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .header {
            color: var(--vp-c-text-1);
            font-weight: bold;
            font-size: 17px;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 4px;

            &:hover {
                text-decoration: none;
            }
        }

        .desiction {
            color: var(--vp-c-text-2);
            font-size: 13px;
            user-select: none;
        }
    }

    .tools {
        padding-left: 2px;

        .icon {
            width: 28px;
            min-width: 28px;
            height: 28px;
            font-size: 17px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            transition: background-color 0.3s;
            color: var(--vp-c-text-2);

            &:hover {
                background-color: rgba(125, 124, 124, 0.1);
            }
        }
    }





}
</style>