<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <div>
    <RouterLink to="/introduction">
      <WelcomeItem>
        <template #icon>
          <DocumentationIcon />
        </template>
        <template #heading>Introdução</template>

        Este tópico é responsável por introduzir o conteúdo da disciplina.
      </WelcomeItem>
    </RouterLink>

    <RouterLink to="/testing">
      <WelcomeItem>
        <template #icon>
          <ToolingIcon />
        </template>
        <template #heading>Verificação, Validação e testes</template>

      Breve visão sobre verificação, validação e testes.
      </WelcomeItem>
    </RouterLink>

    <RouterLink to="/git">
      <WelcomeItem>
        <template #icon>
          <EcosystemIcon />
        </template>
        <template #heading>Gestão da configuração</template>

        Neste tópico abordamos o conteúdo de GIT
      </WelcomeItem>
    </RouterLink>

    <RouterLink to="/cmmi">
      <WelcomeItem>
        <template #icon>
          <CommunityIcon />
        </template>
        <template #heading>CMMI</template>

        O modelo CMMI, para que serve e objetivos.
      </WelcomeItem>
    </RouterLink>
  </div>
</template>
