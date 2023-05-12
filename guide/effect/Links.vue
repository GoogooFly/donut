<template>
    <NGrid cols="2 s:3 m:4 l:4 xl:4 2xl:6" x-gap="10" y-gap="10" responsive="screen">
        <NGridItem v-for="({ index, href, title, desiction, icon }) in data" :key="index">
            <div class="li">
                <div class="container">
                    <NImage width="32" height="32" class="logo" :src="icon" :intersection-observer-options="{ root: null }"
                        lazy preview-disabled />
                    <div class="header">
                        <NEllipsis :line-clamp="1">
                            <h4 class="title">
                                <a :href="href" target="_blank">{{ title }}</a>
                            </h4>
                        </NEllipsis>
                        <NPopover trigger="hover" placement="top-start">
                            <template #trigger>
                                <div class="copy" @click="onCopy(href)">
                                    <Copy theme="outline" size="16" />
                                </div>
                            </template>
                            <span class="href">{{ href }}</span>
                        </NPopover>
                    </div>
                </div>
                <NEllipsis class="desiction" :line-clamp="1" expand-trigger="click" :tooltip="false"> {{ desiction }}
                </NEllipsis>
            </div>
        </NGridItem>
    </NGrid>
</template>

<script setup lang="ts">
import { NGrid, NGridItem, NImage, NEllipsis, NPopover, useMessage } from 'naive-ui';
import { Copy } from '@icon-park/vue-next';
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
    padding: 8px 13px 6px 13px;
    background-color: var(--vp-c-bg-soft);
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: transform .3s ease, box-shadow .3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    &:hover {
        transform: translateY(-7px);
        box-shadow: 0px 0px 6px rgba(0, 0, 0, .12);
    }

    .logo {
        min-width: 32px;
        max-height: 32px;
        margin-right: 12px;
        border-radius: 4px;
    }

    .container {
        display: flex;
        align-items: center;
        margin-bottom: 4px;

        .header {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .title {
                font-size: 17px;

                a {
                    color: var(--vp-c-text-1);
                    font-weight: bold;

                    &:hover {
                        text-decoration: none;
                    }
                }
            }

            .href {
                color: red;
            }

            .copy {
                width: 27px;
                height: 27px;
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

    .desiction {
        color: var(--vp-c-text-2);
        font-size: 13px;
        user-select: none;
    }
}
</style>