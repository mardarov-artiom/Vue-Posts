<template>
  <div class="modal-description">
    <span>Custom Modal component.</span>
    <span>
      <a href="https://github.com/mardarov-artiom/Vue-Posts/blob/master/src/components/ModalComponent.vue" target="_blank">
        Check source files in git repository
      </a>
    </span>
  </div>
  <div class="examples">
    <div class="one-example">
      <span>Basic Example:</span>
      <div class="mt-1">
        <ModalComponent>
          <template #trigger>
            <ButtonComponent>Trigger modal component</ButtonComponent>
          </template>
          <template #content>
            Content goes here
          </template>
        </ModalComponent>
      </div>

      <div class="code-example">
        <div class="code-row ">
          <span class="tag">&lt;ModalComponent&gt;</span>
        </div>
        <div class="code-row nested">
          <span class="tag">&lt;</span>
          <span class="tag">template</span>
          &nbsp;
          <span class="prop">#trigger</span>
          <span class="tag">&gt;</span>
        </div>
        <div class="code-row nested-1">
          <span class="tag">&lt;</span>
          <span class="tag">button</span>&nbsp;
          <span class="prop">type</span>
          <span class="prop-value">="button"</span>
          <span class="tag">&gt;</span>
          <span>Trigger modal component</span>
          <span class="tag">&lt;/button&gt;</span>
        </div>
        <div class="code-row nested">
          <span class="tag">&lt;/template&gt;</span>
        </div>
        <div class="code-row nested">
          <span class="tag">&lt;</span>
          <span class="tag">template</span>
          &nbsp;
          <span class="prop">#content</span>
          <span class="tag">&gt;</span>
        </div>
        <div class="code-row nested-1">
          <span>Content goes here</span>
        </div>
        <div class="code-row nested">
          <span class="tag">&lt;/template&gt;</span>
        </div>
        <div class="code-row">
          <span class="tag">&lt;/ModalComponent&gt;</span>
        </div>
      </div>
    </div>
    <div class="one-example">
      <span>Example with custom close button:</span>
      <div class="mt-1">
        <ModalComponent>
          <template #trigger>
            <ButtonComponent type="success">Trigger modal component</ButtonComponent>
          </template>
          <template #content="{ close }">
            Content goes here
            <br/>
            <ButtonComponent @click="close" class="mt-1" type="danger">Close Popup</ButtonComponent>
          </template>
        </ModalComponent>
      </div>

      <div class="code-example">
        <div class="code-row ">
          <span class="tag">&lt;ModalComponent&gt;</span>
        </div>
        <div class="code-row nested">
          <span class="tag">&lt;</span>
          <span class="tag">template</span>
          &nbsp;
          <span class="prop">#trigger</span>
          <span class="tag">&gt;</span>
        </div>
        <div class="code-row nested-1">
          <span class="tag">&lt;</span>
          <span class="tag">button</span>&nbsp;
          <span class="prop">type</span>
          <span class="prop-value">="button"</span>
          <span class="tag">&gt;</span>
          <span>Trigger modal component</span>
          <span class="tag">&lt;/button&gt;</span>
        </div>
        <div class="code-row nested">
          <span class="tag">&lt;/template&gt;</span>
        </div>
        <div class="code-row nested">
          <span class="tag">&lt;</span>
          <span class="tag">template</span>
          &nbsp;
          <span class="prop">#content</span>
          <span class="prop-value">="</span>
          <span class="brackets">{</span>
          <span class="prop offset">close</span>
          <span class="brackets">}</span>
          <span class="prop-value">"</span>
          <span class="tag">&gt;</span>
        </div>
        <div class="code-row nested-1">
          <span>Content goes here</span>
        </div>
        <div class="code-row nested-1">
          <span class="tag">&lt;br /&gt;</span>
        </div>
        <div class="code-row nested-1">
          <span class="tag">&lt;</span>
          <span class="tag">button</span>&nbsp;
          <span class="prop">type</span>
          <span class="prop-value">="button"</span>
          <span class="prop">&nbsp;@click</span>
          <span class="tag">&gt;</span>
          <span class="prop-value">="</span>
          <span class="prop">close</span>
          <span class="prop-value">"</span>
          <span>Close popup</span>
          <span class="tag">&lt;/button&gt;</span>
        </div>
        <div class="code-row nested">
          <span class="tag">&lt;/template&gt;</span>
        </div>
        <div class="code-row">
          <span class="tag">&lt;/ModalComponent&gt;</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import ModalComponent from '@/components/ModalComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
</script>

<style scoped lang="scss">
$tag: #499CD5;
$prop: #94DBFD;
$prop-value: #CD9069;
$brackets: #FFC66D;

.modal-description {
  margin-bottom: 1rem;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }

  span {
    display: block;
  }

  a:hover {
    color: var(--vue-green);
  }
}

.one-example:not(:first-child) {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--black);
}

.mt-1 {
  margin-top: 0.5rem;
}

.code-example {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #424242;
  display: inline-block;
  border-radius: 8px;
  font-family: 'Roboto Mono', monospace;
}

.nested {
  padding-left: 1rem;
}

.nested-1 {
  padding-left: 2rem;
}

.code-row {
  width: 100%;
  display: flex;
  font-family: inherit;

  span {
    color: #fff;
    font-family: inherit;
  }

  span.tag {
    color: $tag;
  }

  span.offset {
    margin: 0 0.3rem;
  }

  span.prop {
    color: $prop;
  }

  span.prop-value {
    color: $prop-value;
  }

  span.brackets {
    color: $brackets;
  }
}
</style>
